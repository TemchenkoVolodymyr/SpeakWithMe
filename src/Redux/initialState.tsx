import {foundUserType} from "../components/Header/Search/SearchTypes";
import {currentUserConversationType, dialogsType, PostType, subscribersType} from "./initialStateType";


type initialState = any
export const initialState :initialState  = {
   authUser: null as  foundUserType | null,
   isAuth:false as boolean,
   postsCurrentUser:null as Array<PostType> | null ,
   users:null as Array<foundUserType> | null,
   subscribes:null as subscribersType | null,
   user:null as foundUserType | null,
   dialogs:null as dialogsType | null,
   currentUserConversation:null as currentUserConversationType | null,
}
export type initialStateType = typeof initialState
