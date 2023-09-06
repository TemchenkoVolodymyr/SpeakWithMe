const express = require('express');

const postRouter = express.Router()
const postFunction = require('../Functions/postFunction')

postRouter.route('/')
   .post(postFunction.createPost)

postRouter.route('/:id')
   .get(postFunction.getPostById)


module.exports = postRouter
