const DialogRoom = require('../Schemas/dialogRoomSchema')
const catchAsync = require("../utility/catchAsync");
const ErrorHandler = require("../utility/ErrorHandler");
const Dialogs = require("../Schemas/dialogsSchema");

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