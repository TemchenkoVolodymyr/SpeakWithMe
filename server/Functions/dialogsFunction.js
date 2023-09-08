

const Dialogs = require('../Schemas/dialogsSchema')
const catchAsync = require("../utility/catchAsync");
const ErrorHandler = require("../utility/ErrorHandler");

exports.createDialog = catchAsync(async (req,res) => {
   const message = await Dialogs.create({
      userId:req.body.userId,
      dialogsItem:[{
         senderId:req.body.senderId,
         dialog:[{
            message:req.body.message,
            date:req.body.date
         }]
      }]
   })
   if(message) {
      res.status(200).json({
         status:'success',
         data:{
            message
         }
      })
   }else {
      res.status(400).json({
         status:'Message item is not complete'
      })
   }
})

exports.addDialogMessage = catchAsync(async (req,res,next) => {

   const document = await Dialogs.findOneAndUpdate({userId:req.params.id,senderId:req.body.senderId},{dialog:req.body},{
      new:true,runValidators:true
   })
   if(!document) {
      return next(new ErrorHandler('No document',400))
   }

   res.status(200).json({
      status:'success',
      data:{
         document
      }
   })
})