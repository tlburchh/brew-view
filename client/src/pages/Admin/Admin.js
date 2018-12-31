import React from "react";
// import ReactDOM from "react-dom";
// import API from "../../utils/API"
import MUIDataTable from "mui-datatables";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      available:false
    };
  console.log(this.state.data, "Admin State Data")
  }

  
  render() {
    const columns = ["Brewery", "Beer Name", "Beer Style", "ABV", "IBU", "On Tap"];

    const data = this.state.data.map(beer => {
      return [`${beer['Brewery Name']}`,` ${beer['Beer Name']}`,` ${beer['Beer Style']}`,` ${beer.ABV}`,` ${beer.IBU}`,` ${beer.available}` ]
    

    });


    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: true,
      rowsPerPage:20,

      onRowClick: (rowData, rowState) => {


        const beerAvailable= rowData[5]

        // const available = this.state.data.available

        if(beerAvailable === false){
         return (
          beerAvailable=== true,
          this.setState({
            beerAvailable: true,
            // available: true
           })
         )
        }else if( beerAvailable === true) {
          return( 
            beerAvailable=== false,
            this.setState({
              beerAvailable: false,
              // available: false
          })
          )
        }

        console.log(rowData[5], rowState);
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