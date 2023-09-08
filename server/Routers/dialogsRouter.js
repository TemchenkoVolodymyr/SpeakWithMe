const express = require('express')

const dialogsRouter = express.Router();

const dialogsFunction = require('../Functions/dialogsFunction')

dialogsRouter.route('/')
   .post(dialogsFunction.createDialog)

dialogsRouter.route('/:idUser')
   .get(dialogsFunction.getDialogs)
   .patch(dialogsFunction.addDialogMessage)

module.exports = dialogsRouter