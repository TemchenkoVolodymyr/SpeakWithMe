import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {userAC} from "../Users/User/userAC";
import {Posts} from "../../ApiRequests/Profile/Posts";
import {postsAC} from "../Posts/postsAC";
import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";

export const getUserThunkCreator = (idUserProfile :any) => {
   return async (dispatch : any) => {
      UserProfile.getUser(idUserProfile).then(res => dispatch(userAC(res.data.data.doc)))
   }
}

export const getUserPostsThunkCreator = (currentUser : any) => {
   return async (dispatch : any) => {
      Posts.getPosts(currentUser?._id).then(res => dispatch(postsAC(res.data)))
   }
}

export const createPostThunkCreator = (dataOfPost : any,currentUser : any,setPostText : any) => {
   return async (dispatch : any) => {
      Posts.createPost(dataOfPost).then(res => {
         if (res.status === 200) {
            Posts.getPosts(currentUser._id).then(res => dispatch(postsAC(res.data)))
            setPostText("")
         }
      })
   }
}

export const createDialogRoomHandler = (authUserData : any, interlocutor : any, setMessage : any, navigate : any, message : any) => {

      DialogFunctions.getDialogsCurrentAuthUser(authUserData._id).then(res => {
         if (res.data.data.dialogs.length >= 1) {
            const isConversation = res.data.data.dialogs[0].user.dialogsItem.find((dialog : any) => dialog.interlocutor.id === interlocutor._id)
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
