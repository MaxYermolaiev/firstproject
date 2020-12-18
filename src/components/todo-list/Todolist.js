import React from 'react';
import ToDoNewItem from '../todo-list-item/ToDoNewItem'
import './todo-list.css'

let Todolist = ({items,onDelete,onPressImportant,onPressDone})=> {

    let elements = items.map((item)=>{
        const {id, ...restParametrs} = item;

       return <li key = {id} className="list-group-item">
           <ToDoNewItem {...restParametrs}
                        onDelete={()=>onDelete(id)}
                        onPressImportant={(classNames)=>onPressImportant(id)}
                        onPressDone={(classNames)=>onPressDone(id)}
           />
       </li>
    })

    return(<ul className="list-group todo-list">
        {elements}
    </ul>)};
export default Todolist;