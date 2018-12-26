import axios from "axios";

export default {

  getBeers: function () {
    return axios.get("/api/beers");
  }
}
console.log('axios check')
