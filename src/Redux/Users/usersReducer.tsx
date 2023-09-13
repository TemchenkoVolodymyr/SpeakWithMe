import {initialState} from "../initialState.tsx";
import {foundUserType} from "../../components/Header/Search/SearchTypes";

export const SET_USERS = "SET_USERS"
export const usersReducer = (users = initialState.users,action) : Array<foundUserType> => {
   switch (action.type) {
      case SET_USERS : return  action.newUsers
      default : return users
   }
}