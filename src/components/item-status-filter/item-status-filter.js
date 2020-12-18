import React, {Component} from 'react';
import './item-status-filter.css'

class ItemStatusFilter extends Component {
    filterMask=(e)=> {
        this.props.filterMask(e.target.textContent.toLowerCase(),e.type)
        console.log(e.target.textContent.toLowerCase())
        console.log(e.type)
    }
    button = [
        {value:'Done'},
        {value:'Active'},
        {value:'All'}
    ]


    render(){
        let {toShow:vitalElement} = this.props;
        let buttons = this.button.map((item,index)=>{
            let clazz =(item.value===vitalElement) ?"btn btn-info":"btn-outline-secondary";
            return (<button className={`btn ${clazz}`} type="button" onClick={this.filterMask} key={index}>{item.value}</button>)
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }

}
export default ItemStatusFilter;