const router = require("express").Router();
const bodyParser = require("body-parser");
require("express-group-routes");

const jsonParser = bodyParser.json();
const userControllerV1 = require("../../../controllers/api/v1/user.api.controller");

router.get("/test", jsonParser, userControllerV1.testAPI);

module.exports = router;