import {
    CHANGE_ABOUT_ME, CHANGE_INSTAGRAM, CHANGE_LOOK_FOR_JOB_STATUS, CHANGE_PORTFOLIO,
    CHANGE_STATUS, CHANGE_TELEGRAM, CHANGE_TWITTER,
    CHANGE_USER_NAME, CHANGE_YOUTUBE,
    SET_LOGIN_USER
} from "./authorizationReducer.tsx";
import {foundUserType} from "../../components/Header/Search/SearchTypes";

type authorizationActionType = {
    type: typeof SET_LOGIN_USER,
    authUserData: foundUserType

}
export const authorizationAC = (authUserData: foundUserType): authorizationActionType => {
    return {
        type: SET_LOGIN_USER,
        authUserData,
    }
}


type changeUserNameActionType = {
    type: typeof CHANGE_USER_NAME,
    newName: string
}
export const changeUserNameAC = (newName: string): changeUserNameActionType => {
    return {
        type: CHANGE_USER_NAME,
        newName
    }
}

type changeStatusActionType = {
    type: typeof CHANGE_STATUS,
    newStatus: string,

}
export const changeStatusAC = (newStatus: string): changeStatusActionType => {
    return {
        type: CHANGE_STATUS,
        newStatus
    }
}

type changeAboutMeActionType = {
    type: typeof CHANGE_ABOUT_ME,
    newAboutMe: string,

}
export const changeAboutMeAC = (newAboutMe: string): changeAboutMeActionType => {
    return {
        type: CHANGE_ABOUT_ME,
        newAboutMe
    }
}

type changeTelegramActionType = {
    type: typeof CHANGE_TELEGRAM,
    telegram: string
}
export const changeTelegramAC = (telegram: string): changeTelegramActionType => {
    return {
        type: CHANGE_TELEGRAM,
        telegram
    }
}
type changeInstagramActionType = {
    type: typeof CHANGE_INSTAGRAM,
    instagram: string
}
export const changeInstagramAC = (instagram: string): changeInstagramActionType => {
    return {
        type: CHANGE_INSTAGRAM,
        instagram
    }
}
type changeTwitterActionType = {
    type: typeof CHANGE_TWITTER,
    twitter: string
}
export const changeTwitterAC = (twitter: string): changeTwitterActionType => {
    return {
        type: CHANGE_TWITTER,
        twitter
    }
}
type changeYouTubeActionType = {
    type: typeof CHANGE_YOUTUBE,
    youtube: string,
}
export const changeYouTubeAC = (youtube: string): changeYouTubeActionType => {
    return {
        type: CHANGE_YOUTUBE,
        youtube
    }
}

type changePortfolioActionType = {
    type: typeof CHANGE_PORTFOLIO,
    portfolio: string,
}
export const changePortfolioAC = (portfolio: string): changePortfolioActionType => {
    return {
        type: CHANGE_PORTFOLIO,
        portfolio
    }
}

type changeLookForJob = {
    type: typeof CHANGE_LOOK_FOR_JOB_STATUS,
    isLooking: boolean
}
export const changeLookForJob = (isLooking: boolean): changeLookForJob => {

    return {
        type: CHANGE_LOOK_FOR_JOB_STATUS,
        isLooking

    }
}

