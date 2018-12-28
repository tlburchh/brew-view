import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './utils/API';
import Tasting from "./pages/Tasting";
import Admin from "./pages/Admin";
import Nav from "./components/Nav";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data:{}
    }

  }
  componentDidMount() {
    this.loadBeers();
  };
  loadBeers = () => {
    API.getBeers()
    .then(res => {
      console.log(this.res);
      this.setState({
        data: res.data
      });
      console.log('api check')
        console.log(this.state.data)
      })
      .catch(err => console.log(err));
  };
 
  render() {
    return (
     <Router>
       <div>
        <Nav>
         <Switch>
           <Route exact path="/" component={Admin} />
           <Route exact path="/Admin" component={Admin} />
           <Route exact path="/Tasting" component={Tasting} />
         </Switch>
        </Nav>
       </div>
     </Router>
    );
  }
}

export default App;
