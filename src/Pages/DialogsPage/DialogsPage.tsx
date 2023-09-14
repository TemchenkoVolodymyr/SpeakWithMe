import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './DialogsPage.module.scss'
import {CurrentUserConversationAC} from "../../Redux/CurrentUserFromConversation/CurrentUserConversationAC";
import {getDialogsThunkCreator} from "../../Redux/Dialogs/dialogsThunkCreator";
import DialogsSection from "./DialogsSection/DialogsSection";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";

const DialogsPage = () => {
   const authUserData = useAppSelector((state) => state.authUser)
   const dispatch = useAppDispatch()
   const dialogs = useAppSelector((state) => state.dialogs)

   useEffect(() => {

      dispatch<any>(getDialogsThunkCreator(authUserData))
   }, [authUserData])

   useEffect(() => {

   }, [dialogs])


const setCurrentUserConversation = (user : any) => {
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