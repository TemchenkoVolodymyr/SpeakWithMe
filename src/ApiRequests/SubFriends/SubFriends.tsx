import axios from "axios";

export const subFriends = {
   firstSubscribe(authUserId : string, subscribedFriendsId : string) {

      return axios.post('http://localhost:3001/subFriends',{
         authUserId,
         subscribedFriendsId
      })
   }
   ,
   getSubscribedFriends(authUserId : string) {
      return axios.get(`http://localhost:3001/subFriends/${authUserId}`)
   },
   addNewSubscribe(authUserId : string,subscribedFriendsId : string) {
return axios.patch(`http://localhost:3001/subFriends/${authUserId}`,{
   subscribedFriendsId
})
   }
}