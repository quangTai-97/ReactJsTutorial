import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="App">
        <Navbar />
          {/* <Home /> */}
        
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/about" component={About}  />
            <Route exact path="/contact" component={Contact}  />
            <Route component={NotFound}  />
          </Switch>

        </div>
      </Router>
   
     );
  }
}
 
export default App;
// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <Contact />
//       <About />
//     </div>
//   );
// }

//export default App;
