import axios from "axios";

export default {

  getAllBeers: function () {
    // console.log('axios check')
    return axios.get("/api/get/beers");
  }
}
