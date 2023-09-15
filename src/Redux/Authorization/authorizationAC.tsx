import {
    CHANGE_ABOUT_ME, CHANGE_INSTAGRAM, CHANGE_LOOK_FOR_JOB_STATUS, CHANGE_PORTFOLIO,
    CHANGE_STATUS, CHANGE_TELEGRAM, CHANGE_TWITTER,
    CHANGE_USER_NAME, CHANGE_YOUTUBE,
    SET_LOGIN_USER
} from "./authorizationReducer";
import {foundUserType} from "../../components/Header/Search/SearchTypes";

export type authorizationActionType = {
    type: typeof SET_LOGIN_USER,
    authUserData: foundUserType

}
export const authorizationAC = (authUserData: foundUserType): authorizationActionType => {
    return {
        type: SET_LOGIN_USER,
        authUserData,
    }
}


export type changeUserNameActionType = {
    type: typeof CHANGE_USER_NAME,
    newName: string
}
export const changeUserNameAC = (newName: string): changeUserNameActionType => {
    return {
        type: CHANGE_USER_NAME,
        newName
    }
}

export type changeStatusActionType = {
    type: typeof CHANGE_STATUS,
    newStatus: string,

}
export const changeStatusAC = (newStatus: string): changeStatusActionType => {
    return {
        type: CHANGE_STATUS,
        newStatus
    }
}

export type changeAboutMeActionType = {
    type: typeof CHANGE_ABOUT_ME,
    newAboutMe: string,

}
export const changeAboutMeAC = (newAboutMe: string): changeAboutMeActionType => {
    return {
        type: CHANGE_ABOUT_ME,
        newAboutMe
    }
}

export type changeTelegramActionType = {
    type: typeof CHANGE_TELEGRAM,
    telegram: string
}
export const changeTelegramAC = (telegram: string): changeTelegramActionType => {
    return {
        type: CHANGE_TELEGRAM,
        telegram
    }
}
export type changeInstagramActionType = {
    type: typeof CHANGE_INSTAGRAM,
    instagram: string
}
export const changeInstagramAC = (instagram: string): changeInstagramActionType => {
    return {
        type: CHANGE_INSTAGRAM,
        instagram
    }
}
export type changeTwitterActionType = {
    type: typeof CHANGE_TWITTER,
    twitter: string
}
export const changeTwitterAC = (twitter: string): changeTwitterActionType => {
    return {
        type: CHANGE_TWITTER,
        twitter
    }
}
export type changeYouTubeActionType = {
    type: typeof CHANGE_YOUTUBE,
    youtube: string,
}
export const changeYouTubeAC = (youtube: string): changeYouTubeActionType => {
    return {
        type: CHANGE_YOUTUBE,
        youtube
    }
}

export type changePortfolioActionType = {
    type: typeof CHANGE_PORTFOLIO,
    portfolio: string,
}
export const changePortfolioAC = (portfolio: string): changePortfolioActionType => {
    return {
        type: CHANGE_PORTFOLIO,
        portfolio
    }
}

 export type changeLookForJob = {
    type: typeof CHANGE_LOOK_FOR_JOB_STATUS,
    isLooking: boolean
}
export const changeLookForJob = (isLooking: boolean): changeLookForJob => {

    return {
        type: CHANGE_LOOK_FOR_JOB_STATUS,
        isLooking

    }
}

