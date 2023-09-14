import {loginRequest} from "../../ApiRequests/Login/Login";
import {authorizationAC} from "./authorizationAC";
import {isAuthAC} from "../isAuth/isAuthReducer";

export const createUserThunkCreator = (email : string,name : string,password : string,confirmPassword : string,navigate:Function,photo:any,socialNetwork : any) => {
   return async (dispatch : any) => {
      loginRequest.createUser(email, name, password, confirmPassword , photo , socialNetwork).then(res => {
         if (res.status === 200) {
            dispatch(authorizationAC(res.data.data.user))
            localStorage.setItem('token', JSON.stringify(res.data.token))
            navigate('/')
         }
      })
   }
}

export const loginUserThunkCreator = (email : string,password : string,navigate : Function) => {
   return async (dispatch : any) => {
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