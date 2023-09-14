import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authorizationReducer from "./Authorization/authorizationReducer";
import {isAuthReducer} from "./isAuth/isAuthReducer";
import {postsReducer} from "./Posts/postsReducer";
import {usersReducer} from "./Users/usersReducer";
import {subscribesReducer} from "./Subscribes/subscribesReducer";
import {userReducer} from "./Users/User/userReducer";
import {dialogsReducer} from "./Dialogs/dialogsReducer";
import {currentUserConversationReducer} from "./CurrentUserFromConversation/CurrentUserConversationReducer";

export default (combineReducers)({
   form:formReducer,
   authUser:authorizationReducer,
   isAuth:isAuthReducer,
   postsCurrentUser:postsReducer,
   users:usersReducer,
   subscribers:subscribesReducer,
   user:userReducer,
   dialogs:dialogsReducer,
   currentUserConversation:currentUserConversationReducer,
})