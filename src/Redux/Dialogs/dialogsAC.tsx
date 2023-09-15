import {SET_DIALOGS} from "./dialogsReducer";
import {dialogsType} from "../initialStateType";

export type dialogsActionType = {
   type : typeof SET_DIALOGS,
   dialogs:Array<dialogsType>
}
export const dialogsAC = (dialogs : Array<dialogsType>) : dialogsActionType => {
return{
   type:SET_DIALOGS,
   dialogs:[...dialogs]
}
}