import React from "react";
// import ReactDOM from "react-dom";
// import API from "../../utils/API"
import MUIDataTable from "mui-datatables";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      available:false,
      selectedBeer: {}
    };
  // console.log(this.state.selectedBeer, "State Selected Beer")
  }
 changeBeer = () => {
  //  const beerName = this.state.data["Beer Name"];
  //  const beerOnTap = this.state.data.available;

  //  if ()

  

   return console.log ("BANG!")
 }
  
  render() {
    const columns = ["Brewery", "Beer Name", "Beer Style", "ABV", "IBU", "On Tap"];

    const data = this.state.data.map(beer => {
      return [`${beer['Brewery Name']}`,` ${beer['Beer Name']}`,` ${beer['Beer Style']}`,` ${beer.ABV}`,` ${beer.IBU}`,` ${beer.available}`]
    

    });


    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: true,
      rowsPerPage:20,

      onRowClick: (rowData, rowState) => {

        // const beerName = this.state.data
        
        
      //  const selectedBeer= this.state.data.filter(resp => resp["Beer Name"] !== rowData[1])
      // //  this.state.data.filter(beer => beer["Beer Name"] !== rowData[1]);
      //   console.log('rowData', rowData[1])
      //   // console.log('beer name', resp )
      //   console.log('selected beer', selectedBeer)
       
      //  this.setState({
      //    selectedBeer: selectedBeer
      //  })
       
        // this.changeBeer();
        // const beerAvailable= rowData

        // const available = this.state.data.available

        // if(beerAvailable === false){
        //  return (
        //   beerAvailable=== true,
        //   this.setState({
        //     beerAvailable: true,
        //     // available: true
        //    })
        //  )
        // }else if( beerAvailable === true) {
        //   return( 
        //     beerAvailable=== false,
        //     this.setState({
        //       beerAvailable: false,
        //       // available: false
        //   })
        //   )
        // }

        console.log(rowData, rowState);
      }
    };

    return (
      <MUIDataTable
        title={"Available Beers"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}


export default Admin; 