const router = require('express').Router();
const getController = require("../../controllers/getController");

//Get all saved beers
router.get('/beers', getController.beers);
//Get single saved beers
router.get('/beers/:id', getController.beerId);

module.exports = router;