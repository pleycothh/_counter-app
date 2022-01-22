import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

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

  handelDecrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);

      counters[index] = {...counter}; // pass the object will remove the reference
      if (counters[index].value > 0){
        counters[index].value--;
      }
     
      
      this.setState({counters})
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


  render(){
    return (
      <React.Fragment>
        <NavBar 
        totalCounters = {this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters 
          counters = {this.state.counters}
          onReset = {this.handelReset}
          onIncrement = {this.handelIncrement}
          onDecrement = {this.handelDecrement}
          onDelete = {this.handelDelete} 
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
