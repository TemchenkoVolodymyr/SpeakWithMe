import {SET_LOGIN_USER} from "./authorizationReducer";


export const authorizationAC = (authUserData) => {
return{
   type: SET_LOGIN_USER,
   authUserData
   }
}