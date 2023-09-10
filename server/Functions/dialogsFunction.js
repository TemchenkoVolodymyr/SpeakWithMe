const Dialogs = require('../Schemas/dialogsSchema')
const catchAsync = require("../utility/catchAsync");
const ErrorHandler = require("../utility/ErrorHandler");

exports.createDialog = catchAsync(async (req, res) => {
   const message = await Dialogs.create({
      user: {
         idUser: req.body.idUser,
         dialogsItem: [{
            interlocutor: {
               id: req.body.interlocutor.id,
               name: req.body.interlocutor.name,
               photo: req.body.interlocutor.photo,

            },
            dialog: [{
               sender: req.body.sender,
               message: req.body.message,
               date: req.body.date

            }]
         }],
      }
   })
   if (message) {
      res.status(200).json({
         status: 'success',
         data: {
            message
         }
      })
   } else {
      res.status(400).json({
         status: 'Message item is not complete'
      })
   }
})
exports.getDialogs = catchAsync(async (req, res, next) => {
   const param = req.params.idUser

   let query = Dialogs.find({"user.idUser": param})


   const dialogs = await query


   if (!dialogs) {
      return next(new ErrorHandler('No doc found by ID', 404))
   }
   res.status(200).json({
      status: "Success",
      data: {
         dialogs
      }
   })
})

exports.getDialog = catchAsync(async (req, res, next) => {
   const {userId, dialogId} = req.params

   const query = Dialogs.findOne({"user.dialogsItem._id": dialogId})

   const dialogDocument = await query

   if (!dialogDocument) {
      return next(new ErrorHandler('No dialog under this id', 404))
   }
   console.log(dialogDocument)
   const dialog = dialogDocument.user.dialogsItem.id(dialogId)
   res.status(200).json({
      status: 'success',
      dialog
   })

})
exports.addNewDialog = catchAsync(async (req, res, next) => {

   const document = await Dialogs.findOneAndUpdate({

      "user.idUser": req.body.idUser,
   }, {
      $push: {
         "user.dialogsItem": {
            interlocutor: {
               id: req.body.interlocutor.id,
               name: req.body.interlocutor.name,
               photo: req.body.interlocutor.photo,
            },
            dialog: [{
               sender: req.body.sender,
               message: req.body.message,
               date: req.body.date
            }]
         },
      }
   }, {
      new: true, runValidators: true
   })
   if (!document) {
      return next(new ErrorHandler('No document', 400))
   }

   res.status(200).json({
      status: 'success',
      data: {
         document
      }
   })
})

exports.addNewMessageIntoDialog = catchAsync(async (req, res, next) => {
   const {userId, dialogId} = req.params

   const messages = await Dialogs.findOneAndUpdate({"user.dialogsItem._id": dialogId}, {
      $push: {
         "user.dialogsItem.$.dialog": {
            sender: req.body.sender,
            message: req.body.message,
            date: req.body.date
         }
      }
   })

   if (!messages) {
      return next(new ErrorHandler('No document to update dialog', 400))
   }
   res.status(200).json({
      status: 'success',
      messages
   })
})