import {initialState} from "../initialState";

export const SET_CURRENT_USER_CONVERSATION = "SET_CURRENT_USER_CONVERSATION"
export const currentUserConversationReducer = (currentUserConversation = initialState.currentUserConversation,action) => {
   console.log(action.currentUserConv)
   switch (action.type) {
      case SET_CURRENT_USER_CONVERSATION : {
         return action.currentUserConv
      }

      default: return currentUserConversation
   }
}