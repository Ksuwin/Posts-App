var express = require('express');
var mongoose = require('mongoose');
var posts = require('../model/post');
var bodyParser = require('body-parser');

var postRouter = express.Router();

postRouter.route('/')
.get(function (req, res, next) {
    posts.find({}).sort({createdAt: -1})
      .exec(function (err, posts) {
      	res.render("index", {the_title: "Posts", posts:posts, error:err});
    })
});

postRouter.route('/add')
.post(function (req, res, next) {
    posts.create(req.body, function (err, resp) {
        posts.find({}).sort({createdAt: -1})
          .exec(function (err, posts) {
          	res.render("index", {the_title: "Posts", posts:posts, error:err});
        })
    })
});

module.exports = postRouter;
