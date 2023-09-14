import {initialState} from "../../initialState";
import {foundUserType} from "../../../components/Header/Search/SearchTypes";

export const SET_USER = "SET_USER"


export const userReducer = (user = initialState.user, action : any) : foundUserType => {
   switch (action.type) {
      case SET_USER : {
         return action.user
      }
      default:
         return user
   }
}