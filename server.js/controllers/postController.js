const db = require("../models");

// Define methods for GETTING beer data
module.exports = {
  insertBeer: (req, res) => {
    const newBeer = {
        id: req.body.id,
        'Brewery Name': req.body['Brewery Name'],
        'Beer Name': req.body['Beer Name'],
        'Beer Style': req.body['Beer Style'],
        ABV: req.body.ABV,
        IBU: req.body.IBU,
        available: req.body.available,
    
    };

  

    db.Beers.insertMany(newBeer).then(beersResp => {
        console.log(`Inserted new beer: ${beersResp}`);
  
    }).catch(err => {
        console.log(`Error adding new beer: ${err}`);
        res.json({message: `Error adding new beer`});
    });
},

};

