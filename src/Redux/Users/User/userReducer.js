import {initialState} from "../../initialState";

export const SET_USER = "SET_USER"
export const userReducer = (user = initialState.user, action) => {
   switch (action.type) {
      case SET_USER : {
         return action.user
      }
      default:
         return user
   }
}