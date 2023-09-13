import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authorizationReducer from "./Authorization/authorizationReducer.tsx";
import {isAuthReducer} from "./isAuth/isAuthReducer.tsx";
import {postsReducer} from "./Posts/postsReducer.tsx";
import {usersReducer} from "./Users/usersReducer.tsx";
import {subscribesReducer} from "./Subscribes/subscribesReducer.tsx";
import {userReducer} from "./Users/User/userReducer.tsx";
import {dialogsReducer} from "./Dialogs/dialogsReducer.tsx";
import {currentUserConversationReducer} from "./CurrentUserFromConversation/CurrentUserConversationReducer.tsx";

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