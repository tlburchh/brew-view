import React, {Component, createContext} from 'react';
import API from '../utils/API';

const MyContext = createContext();

export class Provider extends Component{
  constructor(){
    super()
    this.state = {
      data:{},
      beerData:{}
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
    const beerData = this.state.data;
    console.log(beerData)
    return(
      <MyContext.Provider value={{beerData}} >
        {this.props.children}
      </MyContext.Provider>
    )
}
}

export const Consumer = MyContext.Consumer;