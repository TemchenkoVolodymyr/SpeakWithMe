import axios from "axios";

export const subFriends = {
   firstSubscribe(authUserId, subscribedFriendsId) {

      return axios.post('http://localhost:3001/subFriends',{
         authUserId,
         subscribedFriendsId
      })
   }
   ,
   getSubscribedFriends(authUserId) {
      return axios.get(`http://localhost:3001/subFriends/${authUserId}`)
   },
   addNewSubscribe(authUserId,subscribedFriendsId) {
return axios.patch(`http://localhost:3001/subFriends/${authUserId}`,{
   subscribedFriendsId
})
   }
}