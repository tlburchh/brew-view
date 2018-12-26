const db = require('../models');
module.exports = {

  findAll: (req, res) => {
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
  findById: (req, res) => {
    console.log(`Getting beer by id: ${req.params.id}`);
    const id = req.params.id;
    db.beers.findById(id).then(beer => {
      res.json(beer);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: "Error getting beer..." });
    });   
  },
  update: (req, res) => {
    const newData = req.body;
    const id = req.params.id;
    db.beers.findOneAndUpdate(
        { _id: id },
        newData
    ).then(resp => {
        console.log(`Updated rating: ${resp}`);
        res.json(resp);
    }).catch(err => {
        console.log(err);
        res.json({ message: `Error updating rating: ${err}` })
    });
},

};
