import {loginRequest} from "../../ApiRequests/Login/Login";
import {authorizationAC} from "./authorizationAC.tsx";
import {isAuthAC} from "../isAuth/isAuthReducer.tsx";

export const createUserThunkCreator = (email,name,password,confirmPassword,navigate) => {
   return async (dispatch) => {
      loginRequest.createUser(email, name, password, confirmPassword).then(res => {
         if (res.status === 200) {
            dispatch(authorizationAC(res.data.data.user))
            localStorage.setItem('token', JSON.stringify(res.data.token))
            navigate('/')
         }
      })
   }
}

export const loginUserThunkCreator = (email,password,navigate) => {
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