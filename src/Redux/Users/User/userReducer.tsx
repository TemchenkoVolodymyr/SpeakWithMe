import {initialState} from "../../initialState";
import {foundUserType} from "../../../components/Header/Search/SearchTypes";
import {userActionType} from "./userAC";

export const SET_USER = "SET_USER"


export const userReducer = (user = initialState.user, action : userActionType) : foundUserType => {
   switch (action.type) {
      case SET_USER : {
         return action.user
      }
      default:
         return user
   }
}