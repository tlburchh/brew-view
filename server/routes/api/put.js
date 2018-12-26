const router = require("express").Router();
const putController = require("../../controllers/putController");

// Update a beer by ID
router.put("/beers/:id", putController.beerId);

// etc...

module.exports = router;