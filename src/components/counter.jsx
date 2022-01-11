import React, { Component } from 'react'; // imrc cc
import App from '../App';

class Counter extends Component {
    state = {
        value: this.props.value,
        tag: ['tag1', 'tag2']
    }; // object incldue any data

    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };

    render() { 
        // js object from cunter object. every react has prop
        return (
            // element of virtural DOM which are Div, span, button. compare and modify the differetn element
                <div >
                    
                    <span style={ this.styles} className={this.getBadgeClasses()}>{this.formateCount()}</span>
                    <button 
                    
                    onClick={() => this.handelIncrement(this.state)} 
                    className='btn btn-secondary btn-sm'
                    >+</button>
    
                </div>
            /**
             *   {this.state.tag.length === 0 && 'Please create a new tag'}
             *   { this.renderTags() }
             */
        ); 
    }

//    constructor(){
//        super()
//        this.handelIncrement = this.handelIncrement.bind(this);
        /**
         * call constructor from super
         * constrctor has access to counter obejct
         * 1. binding will create new handelIncrement instance
         * handelIncrement function this will always refer to current obejct
         * 2. reset the handelIncrement with bind method
         */
//    }

//    doHandelIncrement = () => {
//        this.handelIncrement({id:1});
//    }

    handelIncrement = product => {    // use arrow function, inhertance this key word from super
        console.log('Increment Clicked', product)
        // this.state.count++    <= will not update the view, react not pass this value

        this.setState({ value: this.state.value + 1});
          // <= embed method from Component method, bring the DOM from virtural to isntance
          // <= get current state count and increase by one, set count property to this value
    }

    renderTags(){
        if ( this.state.tag.length === 0) return <p>There are not tags!</p>;
        return  <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount(product){ 
        const { value: count } = this.state; // pick count propoty
        const x = <h1>Zero</h1>;
        return count === 0 ? x: count;
    }


}
 
export default Counter;