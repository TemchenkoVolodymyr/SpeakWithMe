import {SET_DIALOGS} from "./dialogsReducer";
import {dialogsType} from "../initialStateType";

type dialogsActionType = {
   type : typeof SET_DIALOGS,
   dialogs:Array<dialogsType>
}
export const dialogsAC = (dialogs : any) : dialogsActionType => {
return{
   type:SET_DIALOGS,
   dialogs:[...dialogs.data.data.dialogs]
}
}