import React, {useEffect} from 'react';
import style from './DialogsPage.module.scss'
import {CurrentUserConversationAC} from "../../Redux/CurrentUserFromConversation/CurrentUserConversationAC";
import {getDialogsThunkCreator} from "../../Redux/Dialogs/dialogsThunkCreator";
import DialogsSection from "./DialogsSection/DialogsSection";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {currentUserConversationType, interlocutorType} from "../../Redux/initialStateType";

type dialogType = {
   dialog: Array<dialogType>,
   interlocutor:interlocutorType,
   _id:string
}

const DialogsPage = () => {
   const authUserData = useAppSelector((state) => state.authUser)
   const dispatch = useAppDispatch()
   const dialogs = useAppSelector((state) => state.dialogs)

   useEffect(() => {

      dispatch<any>(getDialogsThunkCreator(authUserData))
   }, [authUserData])

   useEffect(() => {

   }, [dialogs])


const setCurrentUserConversation = (user :currentUserConversationType) => {
      dispatch(CurrentUserConversationAC(user))
}

   return (

      <div className={style.container}>
         {dialogs && dialogs[0]?.user.dialogsItem.map((dialog : any) => <DialogsSection
            setCurrentUserConversation={setCurrentUserConversation}
            dialog={dialog}></DialogsSection>)}

      </div>

   );
};

export default DialogsPage;