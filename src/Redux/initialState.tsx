import {foundUserType} from "../components/Header/Search/SearchTypes";
import {currentUserConversationType, dialogsType, PostType, subscribersType} from "./initialStateType";

export const initialState = {
   authUser: null as Array<foundUserType> | null,
   isAuth:false as boolean,
   postsCurrentUser:null as Array<PostType> | null,
   users:null as Array<foundUserType> | null,
   subscribes:null as subscribersType | null,
   user:null as foundUserType | null,
   dialogs:null as dialogsType | null,
   currentUserConversation:null as currentUserConversationType | null
}
