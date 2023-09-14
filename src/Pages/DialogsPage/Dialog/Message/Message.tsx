import React from 'react';
import style from "../Dialog.module.scss";
import {foundUserType} from "../../../../components/Header/Search/SearchTypes";
import {currentUserConversationType} from "../../../../Redux/initialStateType";

type propsType = {
    item : {
        _id:string,
        sender:string,
        message:string,
        date:string
    },
    currentUserConversation : currentUserConversationType,
    authUserData:foundUserType
}
const Message = (props : propsType) => {

    const {item,currentUserConversation,authUserData} = props
   return (
      <div className={style.wrapper}>
         <div className={style.wrapperItem}>
            <p className={style.name}>{item.sender === authUserData?._id ? "You" : currentUserConversation?.name}</p>
            <p className={style.message}>{item.message}</p>
         </div>


         <p className={style.date}>{item.date}</p>
      </div>
   );
};

export default Message;