const router = require("express").Router();
const bodyParser = require("body-parser");
require("express-group-routes");

const jsonParser = bodyParser.json();
const articleController = require("../controllers/article.controller");

router.get("/all", jsonParser, articleController.getArticles);
router.get("/:id", jsonParser, articleController.getOneArticle);
router.post("/create", jsonParser, articleController.createArticle);

module.exports = router;
