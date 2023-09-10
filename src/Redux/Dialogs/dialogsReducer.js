import {initialState} from "../initialState";


export const SET_DIALOGS = 'SET_DIALOGS'
export const dialogsReducer = (dialogs = initialState.dialogs,action) => {

   switch (action.type) {
      case SET_DIALOGS:{

         return  action.dialogs
      }
      default:return dialogs
   }
}