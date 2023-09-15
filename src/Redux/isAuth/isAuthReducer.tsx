import {initialState} from "../initialState";
import {authActionsTypes} from "../Authorization/authorizationReducer";


export const SET_IS_AUTH = "SET_IS_AUTH"
export const LOG_OUT = "LOG_OUT"

export type AuthorizationThunkActionsTypes = isAuthActionType | logoutActionType | authActionsTypes
export const isAuthReducer = (isAuth = initialState.isAuth, action : AuthorizationThunkActionsTypes): boolean => {
    switch (action.type) {
        case SET_IS_AUTH :
            return true

        case LOG_OUT :
            return false
        default :
            return isAuth
    }
}

type isAuthActionType = {
    type: typeof SET_IS_AUTH
}
export const isAuthAC = (): isAuthActionType => {
    return {
        type: SET_IS_AUTH
    }
}

type logoutActionType = {
    type: typeof LOG_OUT
}
export const logoutAC = (): logoutActionType => {
    return {
        type: LOG_OUT
    }
}