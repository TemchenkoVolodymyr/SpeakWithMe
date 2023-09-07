const express = require('express')

const subscribedRouter = express.Router()

const subFunction = require('../Functions/subscribedFriendsFunction')

subscribedRouter.route('/')
   .post(subFunction.addNewSubFriends)

subscribedRouter.route('/:id')
   .get(subFunction.getSubFriends)
   .patch(subFunction.updateSubFriends)

module.exports = subscribedRouter