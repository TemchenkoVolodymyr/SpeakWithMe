const mongoose = require('mongoose');

const postSchema =  new mongoose.Schema({
   post:{
      type:String,
      required:[true,'Post mast have'],
      minlength:1
   },
   authorId:{
      type:String,
      required:[true,'authorId mast have']
   },
   recipientId:{
      type:String,
      required:[true,'recipientId mast have']
   },
   date:String,
   authorName:{
      type:String,
      required:[true,"author name mast have"]
   },

})

const Post = mongoose.model('Post',postSchema)
module.exports = Post