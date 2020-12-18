import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import Todolist from '../todo-list'
import './index.css'
import ItemStatusFilter from "../item-status-filter";
import React, {Component} from 'react';
import AddItem from '../Add-Item';
//todo-list-item

export default class App extends Component {
    state = {
        toDoData: [
            {label: 'Codding', important: true, id: 1, done: true},
            {label: 'Dreack coffer', important: false, id: 2, done: true},
            {label: 'Brief breack', important: false, id: 3, done: false}
        ],
       // visibleToDoData:[],
        terms:'',
        toShow:'all'
    };
    count = 3;
    createTodoItem = (label) => {
        this.count += 1;
        return {label: label, important: true, id: this.count, done: false};
        // {label:label, important: true, id: this.count, done:false}
    }
    onDeleteComponents = (id) => {
        this.setState(({toDoData,visibleToDoData}) => {
            let index = toDoData.findIndex(item => item.id === id);
            return {toDoData: [...toDoData.slice(0, index), ...toDoData.slice(index + 1)],
                    visibleToDoData:Array.from(this.state.toDoData)
            }
        })
    }
    onInsertProps = (value) => {
        if (value) {
            this.setState(({toDoData}) => {
                return {
                    toDoData: [...toDoData, this.createTodoItem(value)],
                }
            })
        }
    }
    changeProperties = (id, propName) => {
        this.setState(({toDoData}) => {
                let temp = toDoData.map((item) => {
                    let element = item;
                    if (item.id === id) {
                        item[propName] = !item[propName];
                    }
                    return element;
                })
                return {toDoData: temp}
            }
        )
    }
    filterMask = (value, eventType) => {
        if (eventType === 'change') {
            this.setState(({terms})=>{
                return{terms:value}
                console.log(value)
            })
        } else {
            if(this.state.toShow!==value)this.setState(({toShow})=>{
                return {toShow:value}
            })
            console.log(value)
        }
    }
    search=(toDoData,terms,visible)=>{
        if(terms===''&&visible==='all')return toDoData;
          let temp = (terms!=='')?toDoData.filter(item=>item.label.indexOf(terms)>-1):toDoData;
           temp = (visible==='all')?temp:(visible==='done')?temp.filter(item=>item.done===true):temp.filter(item=>item.done===false);
          return temp
    }
    onPressImportant = (value) => {
        this.changeProperties(value, 'important');
    }
    onPressDone = (value) => {
        this.changeProperties(value, 'done');
    }

    render() {
        let {toDoData,terms,toShow} = this.state;
        let itemList = this.search(toDoData,terms,toShow)

        let doneTask = toDoData.filter((item) => item.done === true).length;
        let remantTask = toDoData.length - doneTask;
        return (<div className='Aplication'>
            <AppHeader doneTask={doneTask} remantTask={remantTask}/>
            <div className="top-panel">
                <SearchPanel filterMask={this.filterMask}/>
                <ItemStatusFilter filterMask={this.filterMask}
                                  toShow
                />
            </div>
            <Todolist
                items={itemList}
                onDelete={this.onDeleteComponents}
                onPressImportant={this.onPressImportant}
                onPressDone={this.onPressDone}
            />
            <AddItem
                onInsertProps={this.onInsertProps}
            />
        </div>)

    }
}


