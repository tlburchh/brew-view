import axios from "axios";

export default {

  getBeers: function () {
    return axios.get("/api/beers");
  },
  // updateAvailable: function (updatedBeer) {
  //   return axios.put("/api/beers/" + id, updatedBeer );
  // }
}
console.log('axios check')
