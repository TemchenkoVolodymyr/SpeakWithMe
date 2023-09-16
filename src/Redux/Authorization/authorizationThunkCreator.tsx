import {loginRequest} from "../../ApiRequests/Login/Login";
import {authorizationAC} from "./authorizationAC";
import {AuthorizationThunkActionsTypes, isAuthAC} from "../isAuth/isAuthReducer";
import {ThunkAction} from "redux-thunk";
import {authActionsTypes} from "./authorizationReducer";
import {initialStateType} from "../initialState";
import {socialNetworkType} from "../../components/Header/Search/SearchTypes";

export const createUserThunkCreator = (email : string,name : string,password : string,confirmPassword : string,navigate:Function,photo:string | null,socialNetwork : socialNetworkType) : ThunkAction<Promise<void>, initialStateType, any, authActionsTypes>=> {
   return async (dispatch) => {

      loginRequest.createUser(email, name, password, confirmPassword , photo , socialNetwork).then(res => {

         if (res.status === 200) {
            dispatch(authorizationAC(res.data.data.user))
            localStorage.setItem('token', JSON.stringify(res.data.token))
            navigate('/')
         }
      })
   }
}

export const loginUserThunkCreator = (email : string,password : string,navigate : Function) : ThunkAction<Promise<void>, initialStateType, any, AuthorizationThunkActionsTypes> => {
   return async (dispatch) => {
      loginRequest.login(email, password).then(res => {

         if (res.status === 200) {
            dispatch(isAuthAC())
            dispatch(authorizationAC(res.data.data.user))
            localStorage.setItem('token', JSON.stringify(res.data.token))
            navigate('/')
         }
      })
   }
}