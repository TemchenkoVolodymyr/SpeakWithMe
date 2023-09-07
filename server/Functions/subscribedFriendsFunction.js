

const SubscribedFriendSchema = require('../Schemas/subscribedFriendsSchema')

const ErrorHandler = require("../utility/ErrorHandler");

exports.addNewSubFriends = async (req,res) => {

   const newAddSubFriends = await SubscribedFriendSchema.create({
      authUserId:req.body.authUserId,
      subscribedFriendsId:req.body.subscribedFriendsId
   })

   if(newAddSubFriends) {
      res.status(200).json({
         status:'success',
         data:{
            subFriends:newAddSubFriends
         }
      })
   }else{
      res.status(400).json({
         status:'document has not  created'
      })
   }
}

exports.getSubFriends = async (req,res,next) => {

   const documents = SubscribedFriendSchema.find({authUserId : req.params.id})
if(!documents) {
   next(new ErrorHandler('No documents found by id '), 400)
}
const result = await documents

   res.status(200).json({
      status:'success',
      result:result.length,
      data:{
         result
      }
   })
}

exports.updateSubFriends = async (req,res,next) => {

   const doc = await SubscribedFriendSchema.findOneAndUpdate({authUserId:req.params.id},req.body,{
      new:true, runValidators:true
   })

   if(!doc) {
      return next(new ErrorHandler('No document',400))
   }

   res.status(200).json({
      status:"success",
      data:{
         data:doc
      }
   })
}