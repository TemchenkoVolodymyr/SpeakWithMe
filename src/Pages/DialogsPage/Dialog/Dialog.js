import React, {useEffect, useState} from 'react';
import style from './Dialog.module.scss'
import {NavLink, useParams} from "react-router-dom";
import {DialogFunctions} from "../../../ApiRequests/Dialogs/Dialogs";
import {useSelector} from "react-redux";
import defaultImage from '../../../assets/Avatar/default.png'
import {MdOutlineCancelScheduleSend, MdOutlineSendAndArchive} from "react-icons/md";
import Message from "./Message/Message";
const Dialog = () => {

   const {dialogId} = useParams()
   const authUserData = useSelector((state) => state.authUser)
   const [dialog, setDialog] = useState(null)
   const [message, setMessage] = useState("")
   const currentUserConversation = useSelector((state) => state.currentUserConversation)
console.log(currentUserConversation)
   useEffect(() => {
      DialogFunctions.getDialog(authUserData?._id, dialogId).then(res => setDialog(res.data.dialog)).catch(err => console.log(err))
   }, [dialogId, authUserData])



   const addNewMessage = (dialogId) => {
      if (message) {
         DialogFunctions.addNewMessageIntoDialog(authUserData._id, dialogId, message).then(res => {
            if (res.status === 200) {
               setMessage("")
               DialogFunctions.getDialog(authUserData?._id, dialogId).then(res => setDialog(res.data.dialog)).catch(err => console.log(err))
            }
         })
      }

   }

   return (
      <div className={style.container}>
         <NavLink to={`/profile/${currentUserConversation.id}`}>
         <div className={style.headerDialog}>
            <img src={currentUserConversation.photo || defaultImage} alt={'avatar'}/>
            <p>{currentUserConversation.name}</p>
         </div>
         </NavLink>
         <div className={style.wrapperDialogs}>
         {dialog && dialog.dialog.map(item => <Message authUserData={authUserData} currentUserConversation={currentUserConversation} item={item}></Message>)}
         </div>

         <div className={style.textareaWrapper}>
            <textarea placeholder={'type...'} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button disabled={!message} className={!message ? style.messageNoExist : style.messageExist} onClick={() => addNewMessage(dialog._id)}>{message ? <MdOutlineSendAndArchive fontSize={40}></MdOutlineSendAndArchive> : <MdOutlineCancelScheduleSend fontSize={40}></MdOutlineCancelScheduleSend>}</button>
         </div>
      </div>
   );
};

export default Dialog;