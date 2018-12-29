import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from './utils/API';
import Tasting from "./pages/Tasting";
import Admin from "./pages/Admin";
import Nav from "./components/Nav";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    }

  }
 
  render() {
    return (
     <Router>
       <div>
        <Nav></Nav>
         <Switch>
           <Route exact path="/" component={Admin} />
           <Route exact path="/Admin" component={Admin} />
           <Route exact path="/Tasting" component={Tasting} />
         </Switch>       
       </div>
     </Router>
    );
  }
}

export default App;
