import {subFriends} from "../../../ApiRequests/SubFriends/SubFriends";
import {subscribesAC} from "../../../Redux/Subscribes/subscribesAC.tsx";

export const friendsThunkCreator = (authUserData, idUser) => {
   return async (dispatch) => {

      subFriends.getSubscribedFriends(authUserData._id).then(res => {
         if (res.status === 200) {
            if (res.data.result >= 1) {

               const findCurrentAuthUserSubscribes = res.data.data.result.find(item => item.authUserId === authUserData._id)
               const checkIsSubscribed = findCurrentAuthUserSubscribes.subscribedFriendsId.find(item => item === idUser)

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
         dispatch(subscribesAC(...res.data.data.result))
      }).catch(err => console.log(err))
   }
}