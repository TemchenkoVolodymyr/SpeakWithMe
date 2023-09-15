import {subFriends} from "../../../ApiRequests/SubFriends/SubFriends";
import {subscribesAC} from "../../../Redux/Subscribes/subscribesAC";
import {ThunkAction} from "redux-thunk";
import {subscribersType} from "../../../Redux/initialStateType";
import {subscribersActionsType} from "../../../Redux/Subscribes/subscribesReducer";




// ThunkAction нужен что бы добавить тип для санки . Первый параметр это Promise который означает что мы ничего не возвращаем из санки , могли возвращать что то в then.
// the second is state
// the third is extra arguments
// the fourth is ActionTypes which dispatch can use

export const friendsThunkCreator = (authUserData : any, idUser : string) : ThunkAction<Promise<void>, subscribersType, any, subscribersActionsType> => {
   return async (dispatch ) => {

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