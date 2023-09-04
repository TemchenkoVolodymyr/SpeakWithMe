const Users = require('../Schemas/newUsersSchema');

const jwt = require('jsonwebtoken');

const {promisify} = require('util');
const crypto = require('crypto');

const tokenUtility = require('../utility/Token');
const catchAsync = require("../utility/catchAsync");
const ErrorHandler = require("../utility/ErrorHandler");
const RequestFeatures = require("../utility/RequestFeatures");

exports.createUser = catchAsync(async (req, res) => {
console.log('te')
   const newUser = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      photo: req.body.photo || null,
      socialNetwork: req.body.socialNetwork || null
   });

   tokenUtility.createToken(newUser._id, 200, newUser, res)
});

exports.getUser = catchAsync(async (req, res, next) => {

   const param = req.params.id
   let query = Users.findById(param);


   const doc = await query


   if (!doc) {
      return next(new ErrorHandler('No doc found by ID', 404))
   }

   res.status(200).json({
      status: 'Success',
      data: {
         doc
      }
   })
});

exports.getUsers = catchAsync(async (req, res, next) => {

   let filter = {};
   if (req.params.id) filter = {idUser: req.params.id}

   const documents = new RequestFeatures(Users.find(filter), req.query).filter().sort().fields().pagination();
   if (!documents) {
      next(new ErrorHandler("No documents found by ID to find"), 400)
   }
   let doc = await documents.query

   const result = await doc

   res.status(200).json({
      status: 'Success',
      results: result.length,
      data: {
         result
      }
   })
})

