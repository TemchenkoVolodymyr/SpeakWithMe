import {
   CHANGE_ABOUT_ME,
   CHANGE_LOOK_FOR_JOB,
   CHANGE_STATUS,
   CHANGE_USER_NAME,
   SET_LOGIN_USER
} from "./authorizationReducer";


export const authorizationAC = (authUserData) => {
return{
   type: SET_LOGIN_USER,
   authUserData
   }
}

export const changeUserNameAC = (newName) => {
   return{
      type:CHANGE_USER_NAME,
      newName
   }
}
export const changeStatusAC = (newStatus) => {
   return{
      type:CHANGE_STATUS,
      newStatus
   }
}

export const changeAboutMeAC = (newAboutMe) => {
   return{
      type:CHANGE_ABOUT_ME,
      newAboutMe
   }
}

