const articleData = require("../dummyData/articleData.json");
const ArticleModel = require("../models/articleModel");

module.exports = {
    getArticles: async (req, res) => {
        try {
            const articles = await ArticleModel.find();

            res.status(200).json({
                msg: "OK",
                data: articles
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    },
    getOneArticle: async (req, res) => {
        try {
            const {id} = req.params;
            const article = await ArticleModel.findById(id);

            if(!article){
                return res.status(404).json({
                    message: 'Article not found'
                })
            }

            res.status(200).json({
                msg: "OK",
                data: article
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    },
    createArticle: async (req, res) => {
        try {
            // const article = await ArticleModel.insertMany([
            //
            // ]);
            const article = await ArticleModel.create({
                title: req.body.title,
                synopsis: req.body.synopsis,
                image: req.body.image,
                content: req.body.content
            });

            res.status(201).json({
                message: 'Article Posted',
                data: article
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            });
        }
    }
}
