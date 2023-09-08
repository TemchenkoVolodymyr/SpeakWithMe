const express = require('express')

const dialogsRouter = express.Router();

const dialogsFunction = require('../Functions/dialogsFunction')

dialogsRouter.route('/')
   .get()
   .post(dialogsFunction.createDialog)

dialogsRouter.route('/:id')
   .patch(dialogsFunction.addDialogMessage)

module.exports = dialogsRouter