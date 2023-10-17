const articleData = require("../../../dummyData/articleData.json");

module.exports = {
    getArticles: async (req, res) => {
        try {
            res.status(200).json({
                msg: "OK",
                data: articleData
            })
        } catch (error) {
            console.log(error);
        }
    }
}