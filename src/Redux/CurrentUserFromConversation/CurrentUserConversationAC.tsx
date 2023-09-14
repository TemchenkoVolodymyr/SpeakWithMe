import {SET_CURRENT_USER_CONVERSATION} from "./CurrentUserConversationReducer";
import {currentUserConversationType} from "../initialStateType";

type CurrentUserConversationActionType = {
   type : typeof SET_CURRENT_USER_CONVERSATION,
   currentUserConv : currentUserConversationType
}
export const CurrentUserConversationAC = (currentUserConv : currentUserConversationType) : CurrentUserConversationActionType => {
   return {
      type:SET_CURRENT_USER_CONVERSATION,
      currentUserConv
   }
}