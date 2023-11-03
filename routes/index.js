const router = require("express").Router();
const userRouterApiV1 = require("./api/v1/user.api.routes");
const articleRouterApiV1 = require("./api/v1/article.api.routes");
const countryRouterApiV1 = require("./api/v1/country.api.routes");
const scholarRouter = require("./scholarship.routes");


// API
router.group("/api", route => {
    route.use("/user", userRouterApiV1);
    route.use("/article", articleRouterApiV1);
    route.use("/scholar", scholarRouter);
    route.use("/country", countryRouterApiV1);
});

module.exports = router;
