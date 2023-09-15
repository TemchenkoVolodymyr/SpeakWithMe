import {initialState} from "../initialState";
import {dialogsType} from "../initialStateType";
import {dialogsActionType} from "./dialogsAC";


export const SET_DIALOGS = 'SET_DIALOGS'

type dialogsActionsTypes = dialogsActionType
export const dialogsReducer = (dialogs = initialState.dialogs,action : dialogsActionsTypes) : Array<dialogsType> => {
   console.log(action.dialogs)

   switch (action.type) {
      case SET_DIALOGS:{

         return  action.dialogs
      }
      default:return dialogs
   }
}