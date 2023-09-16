import {subFriends} from "../../../ApiRequests/SubFriends/SubFriends";
import {subscribesAC} from "../../../Redux/Subscribes/subscribesAC";
import {ThunkAction} from "redux-thunk";
import {subscribersType} from "../../../Redux/initialStateType";
import {subscribersActionsType} from "../../../Redux/Subscribes/subscribesReducer";
import {foundUserType} from "../../Header/Search/SearchTypes";


// ThunkAction нужен что бы добавить тип для санки . Первый параметр это Promise который означает что мы ничего не возвращаем из санки , могли возвращать что то в then.
// the second is state
// the third is extra arguments
// the fourth is ActionTypes which dispatch can use
type subscribedFriendsType = {
    _id: string,
    authUserId: string,
    subscribedFriendsId: Array<string>
}

export const friendsThunkCreator = (authUserData: foundUserType, idUser: string): ThunkAction<Promise<void>, subscribersType, any, subscribersActionsType> => {
    return async (dispatch) => {

        subFriends.getSubscribedFriends(authUserData._id).then(res => {

            if (res.status === 200) {
                if (res.data.result >= 1) {

                    const findCurrentAuthUserSubscribes: any = res.data.data.result.find((item: subscribedFriendsType) => item.authUserId === authUserData._id)

                    const checkIsSubscribed: number = findCurrentAuthUserSubscribes?.subscribedFriendsId.find((item: string) => item === idUser)

                    if (!checkIsSubscribed) {
                        findCurrentAuthUserSubscribes?.subscribedFriendsId.push(idUser)
                    } else {
                        const index: number = findCurrentAuthUserSubscribes?.subscribedFriendsId.indexOf(checkIsSubscribed)
                        findCurrentAuthUserSubscribes?.subscribedFriendsId.splice(index, 1)
                    }
                    subFriends.addNewSubscribe(findCurrentAuthUserSubscribes.authUserId, findCurrentAuthUserSubscribes.subscribedFriendsId).then(res => console.log(res))
                } else {
                    subFriends.firstSubscribe(authUserData._id, idUser).catch(err => console.log(err))
                }

            }
            dispatch(subscribesAC(res.data.data.result))
        }).catch(err => console.log(err))
    }
}