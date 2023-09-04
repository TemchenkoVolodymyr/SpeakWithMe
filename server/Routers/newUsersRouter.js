
const express = require('express');

const userRouter = express.Router();
const userFunction = require('../Functions/newUsersFunction')

userRouter.route('/')
   .get(userFunction.getUsers)
   .post(userFunction.createUser)

userRouter.route('/:idUser')
   .get(userFunction.getUser)

