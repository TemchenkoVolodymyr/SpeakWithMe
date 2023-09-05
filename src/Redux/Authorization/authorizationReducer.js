import {initialState} from "../initialState";


export const SET_LOGIN_USER = 'SET_LOGIN_USER'

 const authorizationReducer = (user = initialState.authUser,action) => {
switch (action.type) {
   case SET_LOGIN_USER : {
      return action.authUserData
   }
   default : return user
}
}
export default authorizationReducer