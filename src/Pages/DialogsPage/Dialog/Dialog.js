import React, {useEffect, useState} from 'react';
import style from './Dialog.module.scss'
import {useParams} from "react-router-dom";
import {DialogFunctions} from "../../../ApiRequests/Dialogs/Dialogs";
import {useSelector} from "react-redux";


const Dialog = () => {

   const {dialogId} = useParams()
   const authUserData = useSelector((state) => state.authUser)
   const [dialog, setDialog] = useState(null)
   const [message, setMessage] = useState("")
   const currentUserConversation = useSelector((state) => state.currentUserConversation)

   useEffect(() => {
      DialogFunctions.getDialog(authUserData?._id, dialogId).then(res => setDialog(res.data.dialog)).catch(err => console.log(err))
   }, [dialogId, authUserData])

   console.log(currentUserConversation)

   const addNewMessage = (dialogId) => {
      if (message) {
         DialogFunctions.addNewMessageIntoDialog(authUserData._id, dialogId, message).then(res => {
            if(res.status === 200) {
               DialogFunctions.getDialog(authUserData?._id, dialogId).then(res => setDialog(res.data.dialog)).catch(err => console.log(err))
            }
         })
      }

   }
   console.log(dialog)
   return (
      <div>

         { dialog && dialog.dialog.map(item => <div className={style.wrapper}>
            <div className={style.wrapperItem}>
               <p className={style.name}>{item.sender === authUserData._id ? "You" : currentUserConversation.name}</p>
               <p className={style.message}>{item.message}</p>
            </div>


            <p className={style.date}>{item.date}</p>
         </div>)}

         <div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button onClick={() => addNewMessage(dialog._id)}>send message</button>
         </div>
      </div>
   );
};

export default Dialog;