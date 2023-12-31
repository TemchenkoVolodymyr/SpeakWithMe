import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";
import {dialogsAC} from "./dialogsAC";

export const getDialogsThunkCreator = (authUserData) => {
   return async (dispatch) => {
      DialogFunctions.getDialogsCurrentAuthUser(authUserData._id)
         .then(res => dispatch(dialogsAC((res))))
   }
}