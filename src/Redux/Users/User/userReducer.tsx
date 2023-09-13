import {initialState} from "../../initialState.tsx";
import {foundUserType} from "../../../components/Header/Search/SearchTypes";

export const SET_USER = "SET_USER"


export const userReducer = (user = initialState.user, action) : foundUserType => {
   switch (action.type) {
      case SET_USER : {
         return action.user
      }
      default:
         return user
   }
}