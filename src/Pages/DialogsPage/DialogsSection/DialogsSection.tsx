import React from 'react';
import style from "../DialogsPage.module.scss";
import {NavLink} from "react-router-dom";
import defaultImage from "../../../assets/Avatar/default.png";
import {dialogType, interlocutorType} from "../../../Redux/initialStateType";


type DialogsSectionPropsType = {
   dialog:{
      dialog:Array<dialogType>,
      interlocutor:interlocutorType,
      _id:string
   },
   setCurrentUserConversation:Function
}
const DialogsSection = (props : DialogsSectionPropsType) => {

   const {setCurrentUserConversation,dialog} = props


   return (
      <div className={style.containerMessage}>
         <NavLink to={`/dialog/${dialog._id}`} onClick={() => setCurrentUserConversation(dialog.interlocutor)}>
            <div className={style.avatar}>
               <img src={dialog.interlocutor.photo || defaultImage} alt={'image'}/>
               <p>{dialog.interlocutor.name}</p>
            </div>
            <div className={style.wrapperMessage}>
               <div>
                  <p className={style.lastMessageText}>last message</p>
                  <p className={style.message}>{dialog.dialog[dialog.dialog.length - 1].message}</p>
               </div>
               <div>
                  <p className={style.lastMessageText}>date of last message</p>
                  <p className={style.date}>{dialog.dialog[dialog.dialog.length - 1].date}</p>
               </div>

            </div>
         </NavLink>
      </div>
   );
};

export default DialogsSection;