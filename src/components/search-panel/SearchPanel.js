import React from 'react';
import './SearchPanel.css'

class SearchPanel extends React.Component {
    constructor() {
        super();
        this.searchValue = undefined;

        this.filterMask=(e)=>{this.props.filterMask(e.target.value.toLowerCase(),e.type)}

       // this.keyAction = () => {
         //   let temp = document.getElementsByClassName('form-control inputPanel')[0].value;
          //  console.log(document.getElementsByClassName('form-control inputPanel')[0].value);
            //if (temp.includes("хуй")) {
             //   alert("что скажут родители");
           // }
        //}
//onChange={this.keyAction}

    }

    render() {
        let typeCue = this.searchValue ?? "Search task";
        return (<input
            autoComplete="on"
            className="form-control inputPanel"
            placeholder={typeCue}
            onChange={this.filterMask}

        />)
    }
}

export default SearchPanel;