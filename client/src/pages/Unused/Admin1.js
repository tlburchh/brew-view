import React from "react";
// import Card from "../../components/Card";
// import { render } from "react-dom";
// import { makeData, Logo, Tips } from "./Utils";
import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
  
  class Admin1 extends React.Component {
    constructor() {
      super();
      this.state = {
        beerData:[]
        // data: beerData,
        // breweryName: [],
        // beerName: [],
        // beerStyle: [],
        // abv: null,
        // ibu: null,
        // available: false
      };

      
    }
        // componentDidMount() {
        //   this.makeData()
        // }
        
        
        
        
        
        
    // mappedBeerData = () => {
      //   const mappedData = this.props.data.map((beer) => (
        //     this.setState ({
          
          //       // beerData: resp
          //       beerData:[{
            //       breweryName: beer['Brewery Name'],
            //       beerName: beer['Beer Name'],
            //       beerStyle: beer['Beer Style'],
            //       abv: beer.ABV,
            //       ibu: beer.IBU,
      //       available: beer.available
      //       }]
      //     })
      //     ))
      //     console.log('admin beerData check', mappedData, this.resp)
      // }
      render() {
        // function makeData(len = 5553) {
        //   return range(len).map(d => {
        //     return {
        //       ...newPerson(),
        //       children: range(10).map(newPerson)
        //     };
        //   });
        // }
        // const range = len => {
        //   const arr = [];
        //   for (let i = 0; i < len; i++) {
        //     arr.push(i);
        //   }
        //   return arr;
        // };

      //   const newPerson = () => {
      //     const beer = this.props.data
      //     return {
      //       breweryName: beer['Brewery Name'],
      //         beerName: beer['Beer Name'],
      //         beerStyle: beer['Beer Style'],
      //         abv: beer.ABV,
      //         ibu: beer.IBU,
      //         available: beer.available
           
      //     };
      //   };
      //   console.log(newPerson)
        
      // const { data } = this.newPerson.map(data => data)
       
      
      // {this.props.data.map((beer, i) => (
      // ))};
      return (
        
        <div>
          <ReactTable
        
            // data={data}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
            columns={[
              {
                Header: "Name",
                columns: [
                  {
                    Header: "Brewery Name",
                    accessor: "breweryName",
                    filterMethod: (filter, row) =>
                      row[filter.id].startsWith(filter.value) &&
                      row[filter.id].endsWith(filter.value)
                  },
                  {
                    Header: "Beer Name",
                    id: "beerName",
                    accessor: d => d.beerName,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["beerName"] }),
                    filterAll: true
                  },
                  {
                    Header: "Style",
                    id: "beerStyle",
                    accessor: d => d.beerStyle,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["beerStyle"] }),
                    filterAll: true
                  }
                ]
              },
              {
                Header: "Info",
                columns: [
                  {
                    Header: "ABV",
                    accessor: this.props.data.ABV
                  },
                  {
                    Header: "IBU",
                    accessor: "ibu"
                  },
                  {
                    Header: "On Tap",
                    accessor: "available",
                    id: "over",
                    Cell: ({ value }) => (value === true ? "Yes" : "No"),
                    filterMethod: (filter, row) => {
                      if (filter.value === "all") {
                        return true;
                      }
                      if (filter.value === "true") {
                        return row[filter.id] === true;
                      }
                      return row[filter.id] === false;
                    },
                    Filter: ({ filter, onChange }) =>
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "all"}
                      >
                        <option value="all">Show All</option>
                        <option value="true">On Tap</option>
                        <option value="false">Not on Tap</option>
                      </select>
                  }
                ]
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          <br />
          
        </div>
     
      );
    }
  }
  
  // render(<App />, document.getElementById("root"));

export default Admin1;