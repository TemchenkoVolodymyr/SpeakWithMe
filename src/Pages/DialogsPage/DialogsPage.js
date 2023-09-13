import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './DialogsPage.module.scss'
import {CurrentUserConversationAC} from "../../Redux/CurrentUserFromConversation/CurrentUserConversationAC.tsx";
import {getDialogsThunkCreator} from "../../Redux/Dialogs/dialogsThunkCreator";
import DialogsSection from "./DialogsSection/DialogsSection";

const DialogsPage = () => {
   const authUserData = useSelector((state) => state.authUser)
   const dispatch = useDispatch()
   const dialogs = useSelector((state) => state.dialogs)

   useEffect(() => {

      dispatch(getDialogsThunkCreator(authUserData))
   }, [authUserData])

   useEffect(() => {

   }, [dialogs])


const setCurrentUserConversation = (user) => {
      dispatch(CurrentUserConversationAC(user))
}
   return (
      <div className={style.container}>
         {dialogs && dialogs[0]?.user.dialogsItem.map(dialog => <DialogsSection
            setCurrentUserConversation={setCurrentUserConversation}
            dialog={dialog}></DialogsSection>)}

      </div>
   );
};

export default DialogsPage;