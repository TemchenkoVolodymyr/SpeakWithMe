import {SET_DIALOGS} from "./dialogsReducer";

export const dialogsAC = (dialogs) => {
return{
   type:SET_DIALOGS,
   dialogs:[...dialogs.data.data.dialogs]
}
}