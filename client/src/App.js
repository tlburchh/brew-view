import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';

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
    API.getAllBeers()
    .then(res => {
      console.log(res)
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
