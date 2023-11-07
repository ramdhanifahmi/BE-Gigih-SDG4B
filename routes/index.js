const router = require("express").Router();
const articleRouterApi = require("./article.routes");
const countryRouterApi = require("./country.routes");
const scholarRouter = require("./scholarship.routes");


// API
router.group("/api", route => {
    route.use("/article", articleRouterApi);
    route.use("/scholar", scholarRouter);
    route.use("/country", countryRouterApi);
});

module.exports = router;
