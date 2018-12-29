import React, { Component } from "react";
import Card from "../../components/Card";
import APIContext from "../../App"

class Tasting extends Component {
  render() {
    // const {beerData} = useContext(APIContext)
    console.log('Where you at Tasting page?' );
    return(
      <APIContext.consumer>
        <Card />
        <p>tasting</p>
      </APIContext.consumer>
    )
  }
}

export default Tasting;