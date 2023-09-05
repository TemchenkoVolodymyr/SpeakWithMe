import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authorizationReducer from "./Authorization/authorizationReducer";

export default (combineReducers)({
   form:formReducer,
   authUser:authorizationReducer
})