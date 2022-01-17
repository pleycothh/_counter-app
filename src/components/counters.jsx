import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    // state is private an invisable to other component
    // prop is read only

    state = {
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
    };

    handelIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = {...counter}; // pass the object will remove the reference
        counters[index].value++;
        
        this.setState({counters})
       // counter = {id:1, value:4}
    };

    handelDelete = counterId => {
       // console.log(counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId);
        console.log(counters);
        this.setState({counters})
    }
    handelReset= () =>{
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    };

    render() { 
        return ( // pass attrapude to props
            // when pass between open and clos tags, use children
            // children is sepecial type of props
        <div>
            <button 
            onClick={this.handelReset}
            className="btn-primary btn-sm m2">Reset</button>

            {this.state.counters.map(counter => 
            <Counter 
            key={counter.id} 
            onIncrement = {this.handelIncrement}
            onDelete = {this.handelDelete} 
            counter = {counter}
            >
                <h4>Counter #{counter.id}</h4>
            </Counter>
            )}
        </div>
        );
    }
}
 
export default Counters;