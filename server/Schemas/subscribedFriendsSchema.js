const mongoose = require('mongoose')

const subscribedFriendsSchema = new mongoose.Schema({
   authUserId:{
      type:String,
      required:[true,'mast have authUserId in subscribedFriend field']
   },
   subscribedFriendsId:{
      type:[String],
      required:[true,'subFriends mast have']
   }
})

const SubscribedFriends = mongoose.model('SubscribedFriends',subscribedFriendsSchema)
module.exports = SubscribedFriends