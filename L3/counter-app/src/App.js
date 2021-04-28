import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import Counter from './components/counters.jsx';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }; 
   constructor(){
     super();
     console.log('App-Constructor');

   }
   
   componentDidMount(){
     //Ajax call
     console.log('App-Mounted');
   }
  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };  

  render() { 
    console.log('App-Render');
    return ( 
      <React.Fragment>
      <Navbar  totalCounters={this.state.counters.filter(x=>x.value > 0).length}/>
      <main className="Container">
          <Counter 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}/>
      </main>
      </React.Fragment>
     );
  }
}
 

export default App;
