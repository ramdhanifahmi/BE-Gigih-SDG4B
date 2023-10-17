const router = require("express").Router();
const userRouterApiV1 = require("./api/v1/user.api.routes");
const articleRouterApiV1 = require("./api/v1/article.api.routes");


// API
router.group("/api/v1", route => {
    route.use("/user", userRouterApiV1);
    route.use("/article", articleRouterApiV1);
});

module.exports = router;