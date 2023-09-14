import {initialState} from "../initialState";
import {dialogsType} from "../initialStateType";


export const SET_DIALOGS = 'SET_DIALOGS'


export const dialogsReducer = (dialogs = initialState.dialogs,action : any) : dialogsType => {

   switch (action.type) {
      case SET_DIALOGS:{

         return  action.dialogs
      }
      default:return dialogs
   }
}