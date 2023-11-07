const router = require("express").Router();
const bodyParser = require("body-parser");
require("express-group-routes");

const jsonParser = bodyParser.json();
const countryController = require("../controllers/country.controller");

router.get("/all", jsonParser, countryController.getCountries);
router.get("/:id", jsonParser, countryController.getOneCountry);
router.post("/create", jsonParser, countryController.createCountry);

module.exports = router;
