import {
   CHANGE_ABOUT_ME, CHANGE_INSTAGRAM,
   CHANGE_LOOK_FOR_JOB, CHANGE_PORTFOLIO,
   CHANGE_STATUS, CHANGE_TELEGRAM, CHANGE_TWITTER,
   CHANGE_USER_NAME, CHANGE_YOUTUBE,
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

export const changeTelegram = (telegram) => {
   return{
      type:CHANGE_TELEGRAM,
      telegram
   }
}
export const changeInstagram = (instagram) => {
   return{
      type:CHANGE_INSTAGRAM,
      instagram
   }
}
export const changeTwitter = (twitter) => {
   return{
      type:CHANGE_TWITTER,
      twitter
   }
}
export const changeYouTube = (youtube) => {
   return{
      type:CHANGE_YOUTUBE,
      youtube
   }
}
export const changePortfolio = (portfolio) => {
   return{
      type:CHANGE_PORTFOLIO,
      portfolio
   }
}

