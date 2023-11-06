const router = require("express").Router();
const articleRouterApiV1 = require("./api/article.api.routes");
const countryRouterApiV1 = require("./api/country.api.routes");
const scholarRouter = require("./scholarship.routes");


// API
router.group("/api", route => {
    route.use("/article", articleRouterApiV1);
    route.use("/scholar", scholarRouter);
    route.use("/country", countryRouterApiV1);
});

module.exports = router;
