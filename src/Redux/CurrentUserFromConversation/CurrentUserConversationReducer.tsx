import {initialState} from "../initialState";
import {currentUserConversationType} from "../initialStateType";

export const SET_CURRENT_USER_CONVERSATION = "SET_CURRENT_USER_CONVERSATION"
export const currentUserConversationReducer = (currentUserConversation = initialState.currentUserConversation,action:any) : currentUserConversationType => {

   switch (action.type) {
      case SET_CURRENT_USER_CONVERSATION : {
         return action.currentUserConv
      }

      default: return currentUserConversation
   }
}