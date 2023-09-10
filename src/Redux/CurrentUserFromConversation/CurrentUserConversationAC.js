import {SET_CURRENT_USER_CONVERSATION} from "./CurrentUserConversationReducer";

export const CurrentUserConversationAC = (currentUserConv) => {
   return {
      type:SET_CURRENT_USER_CONVERSATION,
      currentUserConv
   }
}