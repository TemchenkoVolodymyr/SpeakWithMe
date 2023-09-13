import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {userAC} from "../Users/User/userAC.tsx";
import {Posts} from "../../ApiRequests/Profile/Posts";
import {postsAC} from "../Posts/postsAC.tsx";
import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";

export const getUserThunkCreator = (idUserProfile) => {
   return async (dispatch) => {
      UserProfile.getUser(idUserProfile).then(res => dispatch(userAC(res.data.data.doc)))
   }
}

export const getUserPostsThunkCreator = (currentUser) => {
   return async (dispatch) => {
      Posts.getPosts(currentUser?._id).then(res => dispatch(postsAC(res.data)))
   }
}

export const createPostThunkCreator = (dataOfPost,currentUser,setPostText) => {
   return async (dispatch) => {
      Posts.createPost(dataOfPost).then(res => {
         if (res.status === 200) {
            Posts.getPosts(currentUser._id).then(res => dispatch(postsAC(res.data)))
            setPostText("")
         }
      })
   }
}

export const createDialogRoomHandler = (authUserData, interlocutor, setMessage, navigate, message) => {

      DialogFunctions.getDialogsCurrentAuthUser(authUserData._id).then(res => {
         if (res.data.data.dialogs.length >= 1) {
            const isConversation = res.data.data.dialogs[0].user.dialogsItem.find(dialog => dialog.interlocutor.id === interlocutor._id)
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
