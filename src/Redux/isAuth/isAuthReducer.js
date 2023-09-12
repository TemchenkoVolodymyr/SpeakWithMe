import {initialState} from "../initialState";


export const SET_IS_AUTH = "SET_IS_AUTH"
export const LOG_OUT = "LOG_OUT"
export const isAuthReducer = (isAuth = initialState.isAuth,action) => {
   switch (action.type) {
      case SET_IS_AUTH : return true

      case LOG_OUT : return  false
      default : return isAuth
   }
}


export const isAuthAC = () => {
   return{
      type:SET_IS_AUTH
   }
}
export const logoutAC = () => {
   return{
      type:LOG_OUT
   }
}