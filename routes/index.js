const router = require("express").Router();
const userRouter = require("./user.routes");
const articleRouter = require("./article.routes");
const countryRouter = require("./country.routes");
const scholarRouter = require("./scholarship.routes");


// API
router.group("/api", route => {
    route.use("/user", userRouter);
    route.use("/article", articleRouter);
    route.use("/scholar", scholarRouter);
    route.use("/country", countryRouter);
});

module.exports = router;
