import './index.css'
import React, {Component} from 'react';


export default class AddItem extends Component {
    state = {label:''}
    onSubmit = (e) => {
        //console.log('Work')
        e.preventDefault();
        this.props.onInsertProps(this.state.label);
        this.setState({label:''})
    }

onLabelChange = (e) => {
    this.setState({label: e.target.value})
    console.log(this.state.label)
}

render()
{
    return (
        <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
            <input
                type='text'
                className="form-control"
                placeholder="insert task here"
                onChange={this.onLabelChange}
                value={this.state.label}
            />
            <button type="button" onClick={this.onSubmit} className="btn btn-outline-secondary">
                Add item
            </button>
        </form>
    )
}
}
