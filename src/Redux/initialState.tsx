import {foundUserType} from "../components/Header/Search/SearchTypes";

export const initialState = {
   authUser: null as Array<foundUserType> | null,
   isAuth:false,
   postsCurrentUser:null,
   users:null,
   subscribes:null,
   user:null,
   dialogs:null,
   currentUserConversation:null
}

export type initialStateType = typeof initialState