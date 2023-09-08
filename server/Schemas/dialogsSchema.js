
const mongoose = require('mongoose')

const dialogsSchema = new mongoose.Schema({
   userId:{
      type:String,
      required:[true,'userId mast have in dialogs']
   },
   dialogsItem: [{
      senderId:String,
      dialog:[{
         message:String,
         date:String
      }],

   }
   ]

})

const Dialogs = mongoose.model('dialogs',dialogsSchema)

module.exports = Dialogs