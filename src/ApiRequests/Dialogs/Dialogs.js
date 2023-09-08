import axios from "axios";

export const DialogFunctions = {
   createDialog(authUserId,interlocutorId) {
return axios.post(`http://localhost:3001/dialogs`,{
   userId:authUserId,senderId:interlocutorId
})
   },
   getDialogsCurrentAuthUser(idUser) {
      return axios.get(`http://localhost:3001/dialogs/${idUser}`)
   }
}