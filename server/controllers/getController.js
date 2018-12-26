const db = require('../models');
module.exports = {

  beers: (req, res) => {
    console.log('get all beers');
    db.beers.find()
    .then(beers => {
      res.json(beers);
      console.log('success')
      console.log(beers)
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: 'Error getting all beers'})
    });
  },
  beerId: (req, res) => {
    console.log(`Getting beer by id: ${req.params.id}`);
    const id = req.params.id;
    db.beers.findById(id).then(beer => {
      res.json(beer);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: "Error getting beer..." });
    });   
  },
};
