const db = require('../models');
module.exports = {



  findAll: function(req, res) {
    db.Beer
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findAll: (req, res) => {
  //   console.log('get all beers');
  //   db.Beer.find(req.query)
  //   .then(beerModel => {
  //     res.json(beerModel);
  //     console.log('success')
  //     console.log(beerModel)
  //   }).catch(err => {
  //     console.log(`Error: ${err}`);
  //     res.json({ message: 'Error getting all beers'})
  //   });
  // },
  findById: (req, res) => {
    console.log(`Getting beer by id: ${req.params.id}`);
    const id = req.params.id;
    db.Beer.findById(id).then(beerModel => {
      res.json(beerModel);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: "Error getting beer..." });
    });   
  },
  update: (req, res) => {
    const newData = req.body;
    const id = req.params.id;
    db.Beer.findOneAndUpdate(
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
