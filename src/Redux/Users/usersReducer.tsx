import {initialState} from "../initialState";
import {foundUserType} from "../../components/Header/Search/SearchTypes";
import {usersActionType} from "./usersAC";

export const SET_USERS = "SET_USERS"
export const usersReducer = (users = initialState.users,action : usersActionType) : Array<foundUserType> | null => {
   switch (action.type) {
      case SET_USERS : return  action.newUsers
      default : return users
   }
}