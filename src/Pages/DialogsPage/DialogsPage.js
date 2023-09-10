import React, {useEffect, useState} from 'react';
import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {dialogsAC} from "../../Redux/Dialogs/dialogsAC";
import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {userAC} from "../../Redux/Users/User/userAC";
import style from './DialogsPage.module.scss'
import defaultImage from '../../assets/Avatar/default.jpg'
import {NavLink} from "react-router-dom";
import {CurrentUserConversationAC} from "../../Redux/CurrentUserFromConversation/CurrentUserConversationAC";

const DialogsPage = () => {
   const authUserData = useSelector((state) => state.authUser)
   const dispatch = useDispatch()
   const user = useSelector((state) => state.user)
   const dialogs = useSelector((state) => state.dialogs)
   const [allDialogs, setAllDialogs] = useState(null)
   const [allUsersId, setAllUsersId] = useState([])

   useEffect(() => {

      DialogFunctions.getDialogsCurrentAuthUser(authUserData._id).then(res => dispatch(dialogsAC((res))))
   }, [authUserData])

   console.log(dialogs)


   useEffect(() => {

   }, [dialogs])

const setCurrentUserConversation = (user) => {
      console.log(user)
      dispatch(CurrentUserConversationAC(user))
}
   return (
      <div>
         {dialogs && dialogs[0]?.user.dialogsItem.map(dialog => <div className={style.containerMessage}>
            <NavLink to={`/dialog/${dialog._id}`} onClick={() => setCurrentUserConversation(dialog.interlocutor)}>
               <div>
                  <img src={dialog.interlocutor.photo || defaultImage} alt={'image'}/>
                  <p>{dialog.interlocutor.name}</p>
               </div>
               <div className={style.wrapperMessage}>
                  <p className={style.message}>{dialog.dialog[dialog.dialog.length - 1].message}</p>
                  <p className={style.date}>last message {dialog.dialog[dialog.dialog.length - 1].date}</p>
               </div>
            </NavLink>
         </div>)}

      </div>
   );
};

export default DialogsPage;