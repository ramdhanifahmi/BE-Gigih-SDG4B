const router = require("express").Router();
const bodyParser = require("body-parser");
require("express-group-routes");

const jsonParser = bodyParser.json();
const countryControllerV1 = require("../../controllers/api/country.api.controller");

router.get("/all", jsonParser, countryControllerV1.getCountries);
router.get("/:id", jsonParser, countryControllerV1.getOneCountry);
router.post("/create", jsonParser, countryControllerV1.createCountry);

module.exports = router;