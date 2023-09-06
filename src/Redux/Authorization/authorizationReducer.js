import {initialState} from "../initialState";


export const SET_LOGIN_USER = 'SET_LOGIN_USER'
export const CHANGE_USER_NAME = "CHANGE_USER_NAME"

export const CHANGE_STATUS = "CHANGE_STATUS"
export const CHANGE_ABOUT_ME = "CHANGE_ABOUT_ME"

export const CHANGE_YOUTUBE = "CHANGE_YOUTUBE"
export const CHANGE_TWITTER = "CHANGE_TWITTER"
export const CHANGE_INSTAGRAM = "CHANGE_INSTAGRAM"
export const CHANGE_TELEGRAM = "CHANGE_TELEGRAM"
export const CHANGE_PORTFOLIO = "CHANGE_PORTFOLIO"


const authorizationReducer = (user = initialState.authUser, action) => {

   switch (action.type) {
      case SET_LOGIN_USER : {
         return action.authUserData
      }
      case CHANGE_USER_NAME : {
         return {...user, name: action.newName}
      }
      case CHANGE_STATUS : {
         return {...user, status: action.newStatus}
      }
      case CHANGE_ABOUT_ME : {
         return {
            ...user, aboutMe: action.newAboutMe
         }

      }
      case CHANGE_TELEGRAM : {
         return {...user, socialNetwork: {...user.socialNetwork, telegram: action.telegram}}
      }
      case CHANGE_TWITTER : {
         return {...user, socialNetwork: {...user.socialNetwork, twitter: action.twitter}}
      }
      case CHANGE_YOUTUBE : {
         return {...user, socialNetwork: {...user.socialNetwork, youtube: action.youtube}}
      }
      case CHANGE_PORTFOLIO: {
         return {...user, socialNetwork: {...user.socialNetwork, portfolio: action.portfolio}}
      }
      case CHANGE_INSTAGRAM : {
         return {...user, socialNetwork: {...user.socialNetwork, instagram: action.instagram}}
      }

      default :
         return user
   }
}
export default authorizationReducer