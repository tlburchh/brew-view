const mongoose = require("mongoose");
const db = require("../models");

// This file seeds database

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Bruvue", { useNewUrlParser: true });

  const beersSeed = [
    {
      "Brewery Name": "Arbor Brewing company Beers",
      "Beer Name": "10 BLINKS Cheery Saison",
      "Beer Style": "Saison",
      "ABV": "9.2%",
      "IBU": "24/OG"
    },
    {
      "Brewery Name": "Arbor Brewing company Beers",
      "Beer Name": "Arbor Cheery Cider",
      "Beer Style": "Cider",
      "ABV": "6.3%",
      "IBU": "/OG"
    },
    {
      "Brewery Name": "Arbor Brewing company Beers",
      "Beer Name": "Barrel Aged EIK ZON IPA",
      "Beer Style": "Sour",
      "ABV": "7.0%",
      "IBU": "80/OG"
    },
    {
      "Brewery Name": "Arbor Brewing company Beers",
      "Beer Name": "Bliss Wheat",
      "Beer Style": "Wheat Beer",
      "ABV": "5.9%",
      "IBU": "15/OG 1.054"
    },
    {
      "Brewery Name": "Arbor Brewing company Beers",
      "Beer Name": "Bollywood Blonde",
      "Beer Style": "Blonde",
      "ABV": "6.0%",
      "IBU": "7/OG 1.056"
    },
    {
      "Brewery Name": "Arbor Brewing company Beers",
      "Beer Name": "Buzzsaw American IPA",
      "Beer Style": "IPA",
      "ABV": "7.5%",
      "IBU": "51/OG 1.066"
    }
  ];

  const notesSeed = [
    {
      name: 'note name',
      note: 'I am a note'
    }
  ];

//seed initial data
db.Beers.deleteMany({}).then(
  db.Beers.insertMany(beersSeed).then(resp => {
    console.log("Added beers: " + resp);
  }).catch(err => {
      console.log("Error inserting beers");
  }))
