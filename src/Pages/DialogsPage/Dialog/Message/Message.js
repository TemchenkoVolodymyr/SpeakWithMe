import React from 'react';
import style from "../Dialog.module.scss";

const Message = ({item,currentUserConversation,authUserData}) => {
   return (
      <div className={style.wrapper}>
         <div className={style.wrapperItem}>
            <p className={style.name}>{item.sender === authUserData._id ? "You" : currentUserConversation.name}</p>
            <p className={style.message}>{item.message}</p>
         </div>


         <p className={style.date}>{item.date}</p>
      </div>
   );
};

export default Message;