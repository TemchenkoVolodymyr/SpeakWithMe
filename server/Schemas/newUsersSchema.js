const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require("crypto");
const validator = require("validator");


const usersSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'The user name mast have'],
      unique: true,
      trim: true,
      timestamps: true,
   },
   email: {
      type: String,
      required: [true, 'The user email mast have'],
      unique: true,
      trim: true
   },
   password: {
      type: String,
      required: [true, 'The user password mast have '],
      minlength: 6
   },
   confirmPassword: {
      type: String,
      required: [true, 'The confirm password mast have'],
      validate: {
         validator: function (el) {
            return el === this.password;
         },
         message: "Passwords are not the same"
      }
   },
   photo: String || null,
   socialNetwork: {
      telegram:String,
      instagram:String,
      youtube:String,
      portfolio:String,
      twitter:String
   } || null,

   //
   status:String || null,
   aboutMe:String || null,
   lookForJob:Boolean || null,

})

usersSchema.pre('save', async function (next) {

   const lengthHash = 12;

   if (!this.isModified('password')) {
      return next()

   } else {

      this.password = await bcrypt.hash(this.password, lengthHash);

      this.confirmPassword = undefined;

      next();
   }
})

usersSchema.methods.correctPassword = async function (
   candidatePassword,
   userPassword
) {

   return await bcrypt.compare(candidatePassword, userPassword);
}

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;