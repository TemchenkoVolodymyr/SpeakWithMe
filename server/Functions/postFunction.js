

const Post = require('../Schemas/postSchema')
const ErrorHandler = require("../utility/ErrorHandler");

exports.createPost = async (req,res) => {

   const newPost = await Post.create({
      post:req.body.post,
      authorId:req.body.authorId,
      authorName:req.body.authorName,
      recipientId:req.body.recipientId,
      date:req.body.date
   })

   if(newPost) {
      res.status(200).json({
         status:'success',
         data:{
            post:newPost
         }
      })
   }else{
      res.status(400).json({
         status:'document didnt create'
      })
   }
}

exports.getPostById = async (req,res,next) => {

   const documents = Post.find({recipientId: req.params.id})

   if(!documents) {
      next(new ErrorHandler("No documents found by ID to find"), 400)
   }
   const result = await documents
console.log(documents)
res.status(200).json({
   status:'success',
   result:result.length,
   data:{
      result
   }
})
}