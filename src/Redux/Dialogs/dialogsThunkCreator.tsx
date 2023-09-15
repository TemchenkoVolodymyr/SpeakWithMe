import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";
import {dialogsAC, dialogsActionType} from "./dialogsAC";
import {Dispatch} from "react";
import {foundUserType} from "../../components/Header/Search/SearchTypes";

export const getDialogsThunkCreator = (authUserData : foundUserType) => {
   return async (dispatch : Dispatch<dialogsActionType>) => {
      DialogFunctions.getDialogsCurrentAuthUser(authUserData._id)
         .then(res => dispatch(dialogsAC((res.data.data.dialogs))))
   }
}