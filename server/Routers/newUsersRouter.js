
const express = require('express');

const userRouter = express.Router();
const userFunction = require('../Functions/newUsersFunction')



userRouter.route('/')
   .get(userFunction.getUsers)
   .post(userFunction.createUser)

userRouter.route('/:idUser')
   .get(userFunction.getUser)
   .patch(userFunction.updateMe)

userRouter.route('/login')
   .post(userFunction.login)

module.exports = userRouter