import React, { Component } from 'react'; // imrc cc

class Counter extends Component {
    state = {
        count:0,
    }; // object incldue any data

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    };

    render() { 
        return (
            <div>
                
                <span style={ this.styles} className={this.getBadgeClasses()}>{this.formateCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        ); 
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount(){ 
        const { count } = this.state; // pick count propoty
        const x = <h1>Zero</h1>;
        return count === 0 ? x: count;
    }
}
 
export default Counter;