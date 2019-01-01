import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './utils/API';
import Tasting from "./pages/Tasting";
import Admin from "./pages/Admin";
import Nav from "./components/Nav";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[],
      available: []
    
    };
   
  }
  
  componentDidMount() {
    this.loadBeers();
    
  };
  
  loadBeers = () => {
    API.getBeers()
    .then(res => {
      
      this.setState({
        data: res.data
      });
      // console.log('api check')
      // console.log(this.state.data)
    })
    .catch(err => console.log(err));
  };
  
 
  render() {
    // const data = this.state.data;
    return (
     <Router>
       <div>
        <Nav></Nav>
         <Switch>
           <Route exact path="/" data={this.state.data} component={() => <Admin
           data={this.state.data}/> } />
           <Route exact path="/Admin" data={this.state.data} component={() => <Admin
           data={this.state.data}/> } />
           <Route exact path="/Tasting"  component={() => <Tasting
           data={this.state.data}/> }  />
         </Switch>       
       </div>
     </Router>
    );
  }
}

export default App;
