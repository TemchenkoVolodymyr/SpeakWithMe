import {SET_USER} from "./userReducer";


export const userAC = (user) => {
   return {
      type: SET_USER,
      user
   }
}