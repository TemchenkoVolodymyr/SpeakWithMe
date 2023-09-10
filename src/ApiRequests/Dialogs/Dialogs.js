import axios from "axios";

export const DialogFunctions = {
   createDialog(authUserId, interlocutor, message) {
      return axios.post(`http://localhost:3001/dialogs`, {
         idUser: authUserId,
         interlocutor: {
            id: interlocutor._id,
            name: interlocutor.name,
            photo: interlocutor.photo || null
         },
         sender: authUserId,
         message: message,
         date: new Date().toLocaleDateString()
      })
   },
   getDialogsCurrentAuthUser(idUser) {
      return axios.get(`http://localhost:3001/dialogs/${idUser}`)
   },

   addNewDialogs(idUser, interlocutor, message) {
      return axios.patch(`http://localhost:3001/dialogs/${idUser}`, {
         idUser: idUser,
         interlocutor: {
            id: interlocutor._id,
            name: interlocutor.name,
            photo: interlocutor.photo || null
         },
         sender: idUser,
         message: message,
         date: new Date().toLocaleDateString()
      })
   },
   getDialog(userId, dialogId) {
      return axios.get(`http://localhost:3001/dialogs/${userId}/${dialogId}`)
   },
   addNewMessageIntoDialog(userId, dialogId,message) {
      return axios.patch(`http://localhost:3001/dialogs/${userId}/${dialogId}`,{
         sender:userId,
         message:message,
         date:new Date().toLocaleDateString()
      })
   }
}

