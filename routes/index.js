const router = require("express").Router();
const articleRouter = require("./article.routes");
const countryRouter = require("./country.routes");
const scholarRouter = require("./scholarship.routes");


// API
router.group("/api", route => {
    route.use("/article", articleRouter);
    route.use("/scholar", scholarRouter);
    route.use("/country", countryRouter);
});

module.exports = router;
