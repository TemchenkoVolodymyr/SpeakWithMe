const mongoose = require('mongoose')

const dialogsSchema = new mongoose.Schema({
   user: {
      idUser: String,
      dialogsItem: [{
         interlocutor: {
            id: String,
            name: String,
            photo: String || null
         },
         dialog: [{
            sender: String,
            message: String,
            date: String
         }],

      }]

   },


})

const Dialogs = mongoose.model('dialogs', dialogsSchema)

module.exports = Dialogs