import {subFriends} from "../../../ApiRequests/SubFriends/SubFriends";
import {subscribesAC} from "../../../Redux/Subscribes/subscribesAC";

export const friendsThunkCreator = (authUserData : any, idUser : any) => {
   return async (dispatch : any) => {

      subFriends.getSubscribedFriends(authUserData._id).then(res => {
         if (res.status === 200) {
            if (res.data.result >= 1) {

               const findCurrentAuthUserSubscribes = res.data.data.result.find((item : any) => item.authUserId === authUserData._id)
               const checkIsSubscribed = findCurrentAuthUserSubscribes.subscribedFriendsId.find((item :any) => item === idUser)

               if (!checkIsSubscribed) {
                  findCurrentAuthUserSubscribes.subscribedFriendsId.push(idUser)
               } else {
                  const index = findCurrentAuthUserSubscribes.subscribedFriendsId.indexOf(checkIsSubscribed)
                  findCurrentAuthUserSubscribes.subscribedFriendsId.splice(index, 1)
               }
               subFriends.addNewSubscribe(findCurrentAuthUserSubscribes.authUserId, findCurrentAuthUserSubscribes.subscribedFriendsId)
            } else {
               subFriends.firstSubscribe(authUserData._id, [idUser]).then(res => console.log(res.data))
            }

         }
         dispatch(subscribesAC(res.data.data.result))
      }).catch(err => console.log(err))
   }
}