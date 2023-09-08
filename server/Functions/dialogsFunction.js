const Dialogs = require('../Schemas/dialogsSchema')
const catchAsync = require("../utility/catchAsync");
const ErrorHandler = require("../utility/ErrorHandler");

exports.createDialog = catchAsync(async (req, res) => {
   const message = await Dialogs.create({
      userId: req.body.userId,
      dialogsItem: [{
         senderId: req.body.senderId,
         dialog: [null]
      }]
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
   console.log(req.params)
   let query = Dialogs.find({userId:param})

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

exports.addDialogMessage = catchAsync(async (req, res, next) => {

   const document = await Dialogs.findOneAndUpdate({
      userId: req.params.idUser,
      senderId: req.body.senderId
   }, {dialog: req.body}, {
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