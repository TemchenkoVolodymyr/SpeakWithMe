const express = require('express')

const dialogsRouter = express.Router();

const dialogsFunction = require('../Functions/dialogsFunction')

dialogsRouter.route('/')
   .post(dialogsFunction.createDialog)
   .get(dialogsFunction.getDialog)

dialogsRouter.route('/:idUser')
   .get(dialogsFunction.getDialogs)
   .patch(dialogsFunction.addNewDialog)

dialogsRouter.route('/:userId/:dialogId')
   .get(dialogsFunction.getDialog)
   .patch(dialogsFunction.addNewMessageIntoDialog)

module.exports = dialogsRouter