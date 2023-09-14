import axios from "axios";

type interlocutorType = {
   _id:string | null,
   name:string | null,
   photo:string | null
}

export const DialogFunctions = {
   createDialog(authUserId : string, interlocutor : interlocutorType, message :string) {
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
   getDialogsCurrentAuthUser(idUser : string) {
      return axios.get(`http://localhost:3001/dialogs/${idUser}`)
   },

   addNewDialogs(idUser : string, interlocutor : interlocutorType, message : string) {
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
   getDialog(userId : any, dialogId : any) {
      return axios.get(`http://localhost:3001/dialogs/${userId}/${dialogId}`)
   },
   addNewMessageIntoDialog(userId : any, dialogId : any,message : any) {
      return axios.patch(`http://localhost:3001/dialogs/${userId}/${dialogId}`,{
         sender:userId,
         message:message,
         date:new Date().toLocaleDateString()
      })
   }
}

