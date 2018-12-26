const router = require("express").Router();
const postController = require("../../controllers/postController");


router.post('/newBeer', postController.insertBeer)
//Post notes about beers


module.exports = router;