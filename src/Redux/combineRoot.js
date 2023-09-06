import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authorizationReducer from "./Authorization/authorizationReducer";
import {isAuthReducer} from "./isAuth/isAuthReducer";

export default (combineReducers)({
   form:formReducer,
   authUser:authorizationReducer,
   isAuth:isAuthReducer
})