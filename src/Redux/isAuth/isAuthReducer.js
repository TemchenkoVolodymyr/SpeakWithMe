import {initialState} from "../initialState";


export const SET_IS_AUTH = "SET_IS_AUTH"
export const isAuthReducer = (isAuth = initialState.isAuth,action) => {
   switch (action.type) {
      case SET_IS_AUTH : return true
      default : return isAuth
   }
}


export const isAuthAC = () => {
   return{
      type:SET_IS_AUTH
   }
}