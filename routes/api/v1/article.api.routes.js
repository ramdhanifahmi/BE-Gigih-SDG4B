const router = require("express").Router();
const bodyParser = require("body-parser");
require("express-group-routes");

const jsonParser = bodyParser.json();
const articleControllerV1 = require("../../../controllers/api/v1/article.api.controller");

router.get("/all", jsonParser, articleControllerV1.getArticles);
router.get("/:id", jsonParser, articleControllerV1.getOneArticle);
router.post("/create", jsonParser, articleControllerV1.createArticle);

module.exports = router;