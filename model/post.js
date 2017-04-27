var mongoose = require('mongoose');
var Schema = mongoose.Schema;

postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
  }, {
      timestamps: true //create and fill fields createdAt and updatedAt
});

var Posts = mongoose.model('posts', postSchema);

module.exports = Posts;
