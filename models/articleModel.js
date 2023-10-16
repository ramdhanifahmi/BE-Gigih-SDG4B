const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  articleId: {
    type: Number, 
    required: true, 
  },
  title: {
    type: String,
    required: true,
  },
  synopsis: String, 
  image: String, 
  content: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
