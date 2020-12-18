import React,{Component} from 'react';
import './AppHeader.css'

class AppHeader extends Component{

    render(){
       let {doneTask,remantTask}=this.props;
        return (
            <div className='AppHeader'>
                <div className='HeadertTask'>Personal task list</div>
                <div className='sideInfo' >Complited {doneTask}</div>
                <div className='sideInfo' >Open {remantTask}</div>
            </div>
        )


    }
}
export default AppHeader;
//<div className='sideInfo' >Complited {done}</div>
//<div className='sideInfo' >Open {open}</div>