import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {userAC} from "../Users/User/userAC";
import {Posts} from "../../ApiRequests/Profile/Posts";
import {postsAC} from "../Posts/postsAC";
import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";
import {ThunkAction} from "redux-thunk";
import {initialStateType} from "../initialState";
import {profilePageActionsTypes} from "../initialStateType";
import {foundUserType} from "../../components/Header/Search/SearchTypes";

export const getUserThunkCreator = (idUserProfile: string): ThunkAction<Promise<void>, initialStateType, any, profilePageActionsTypes> => {
    return async (dispatch) => {
        UserProfile.getUser(idUserProfile).then(res => dispatch(userAC(res.data.data.doc)))
    }
}

export const getUserPostsThunkCreator = (currentUser: foundUserType): ThunkAction<Promise<void>, initialStateType, any, profilePageActionsTypes> => {
    return async (dispatch) => {
        Posts.getPosts(currentUser?._id).then(res => dispatch(postsAC(res.data)))
    }
}


type dataOfPostType = {
    post: string,
    authorName: string,
    authorId: string
    recipientId: string
}
export const createPostThunkCreator = (dataOfPost: dataOfPostType, currentUser: foundUserType, setPostText: Function): ThunkAction<Promise<void>, initialStateType, any, profilePageActionsTypes> => {
    return async (dispatch) => {
        Posts.createPost(dataOfPost).then(res => {
            if (res.status === 200) {
                Posts.getPosts(currentUser?._id).then(res => dispatch(postsAC(res.data)))
                setPostText("")
            }
        })
    }
}


type dialogType = {
   _id : string,
   interlocutor : {
      id:string,
      name:string,
      photo:null | string
   },
   dialog:[{
      id:string,
      sender:string,
      message:string,
      date:string
   }]

}
export const createDialogRoomHandler = (authUserData: foundUserType, interlocutor: foundUserType, setMessage: Function, navigate: Function, message: any) => {

    DialogFunctions.getDialogsCurrentAuthUser(authUserData._id).then(res => {
        if (res.data.data.dialogs.length >= 1) {
            const isConversation = res.data.data.dialogs[0].user.dialogsItem.find((dialog: dialogType) => dialog.interlocutor.id === interlocutor._id)
            if (!isConversation) {
                DialogFunctions.addNewDialogs(authUserData._id, interlocutor, message).then(res => {
                    if (res.status === 200) {
                        setMessage("")
                        navigate('/messages')
                    }
                })
            } else {
                alert('You already have conversation with this user')
                setMessage("")
            }
        } else {
            DialogFunctions.createDialog(authUserData._id, interlocutor, message).then(res => {
                if (res.status === 200) {
                    setMessage("")
                    navigate('/message')
                }
            })
        }
    })
}
