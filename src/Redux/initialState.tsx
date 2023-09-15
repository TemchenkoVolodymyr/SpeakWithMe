import {foundUserType} from "../components/Header/Search/SearchTypes";
import {currentUserConversationType, dialogsType, PostType, subscribersType} from "./initialStateType";
import {currentUserPostsType} from "../Pages/ProfilePage/ProfilePosts/ProfilePosts";



export const initialState : any  = {
   authUser: null as  foundUserType | null,
   isAuth:false as boolean,
   postsCurrentUser:null as Array<currentUserPostsType> | null ,
   users:null as Array<foundUserType> | null,
   subscribes:null as subscribersType | null,
   user:null as foundUserType | null,
   dialogs:null as Array<dialogsType> | null,
   currentUserConversation:null as currentUserConversationType | null,
}
export type initialStateType = typeof initialState
