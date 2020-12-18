import React, {Component} from 'react';
import './todo-list-item.css'

class ToDoNewItem extends Component {

////////////////////////////
    render() {

        const {
            label = 'default label',
            onDelete,
            important,
            done,
            onPressImportant,
            onPressDone
        } = this.props;


        let classNames='todo-list-item';
        if (important) {classNames += ' important'}
        if (done) {classNames += ' done';}

        return (
            <span className={classNames}>
            <span className="todo-list-item-label"
                  onClick={onPressDone}
            > {label}</span>

                <button type="button" className="btn btn-outline-success btn-sm float-right"
                        onClick={onPressImportant}
                >
                    <i className="fa fa-exclamation"/>
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right"
                onClick={onDelete}
                >
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        )
    }
}

export default ToDoNewItem;