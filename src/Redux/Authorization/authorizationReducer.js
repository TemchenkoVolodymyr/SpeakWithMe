import {initialState} from "../initialState";


export const SET_LOGIN_USER = 'SET_LOGIN_USER'
export const CHANGE_USER_NAME = "CHANGE_USER_NAME"

export const CHANGE_STATUS = "CHANGE_STATUS"
export const CHANGE_ABOUT_ME = "CHANGE_ABOUT_ME"


 const authorizationReducer = (user = initialState.authUser,action) => {
    switch (action.type) {
   case SET_LOGIN_USER : {
      return action.authUserData
   }
       case CHANGE_USER_NAME : {
          return {...user,name:action.newName}
       }
       case CHANGE_STATUS : {
          return {...user,status:action.newStatus}
       }
       case CHANGE_ABOUT_ME : {
          return {
             ...user,aboutMe:action.newAboutMe
          }
       }

   default : return user
}
}
export default authorizationReducer