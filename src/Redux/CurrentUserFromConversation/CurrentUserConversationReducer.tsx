import {initialState} from "../initialState";
import {currentUserConversationType} from "../initialStateType";
import {CurrentUserConversationActionType} from "./CurrentUserConversationAC";

export const SET_CURRENT_USER_CONVERSATION = "SET_CURRENT_USER_CONVERSATION"

type currentUserConversationActionsTypes = CurrentUserConversationActionType
export const currentUserConversationReducer = (currentUserConversation = initialState.currentUserConversation,action:currentUserConversationActionsTypes) : currentUserConversationType => {

   switch (action.type) {
      case SET_CURRENT_USER_CONVERSATION : {
         return action.currentUserConv
      }

      default: return currentUserConversation
   }
}