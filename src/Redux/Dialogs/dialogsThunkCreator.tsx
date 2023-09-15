import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";
import {dialogsAC} from "./dialogsAC";
import {Dispatch} from "react";
import {Action} from "redux";

export const getDialogsThunkCreator = (authUserData : any) => {
   return async (dispatch : Dispatch<Action>) => {
      DialogFunctions.getDialogsCurrentAuthUser(authUserData._id)
         .then(res => dispatch(dialogsAC((res.data.data.dialogs))))
   }
}