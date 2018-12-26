const router = require('express').Router();
const getController = require("../../controllers/getController");

//Get all saved beers
router.get('/beers', getController.beers);
console.log('get check');
//Get single saved beers
router.get('/beers/:id', getController.beerId);

module.exports = router;