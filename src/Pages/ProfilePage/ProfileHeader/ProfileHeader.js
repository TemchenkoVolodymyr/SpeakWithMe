import React from 'react';
import style from "../ProfilePage.module.scss";
import defaultAvatar from "../../../assets/Avatar/default.png";

const ProfileHeader = ({editMod,currentUser,setMessage,editModeHandler,createDialog,message,changeName}) => {
   return (
      <div className={style.wrapperAvatar}>
         <div className={style.avatar}>
            <img alt={'avatar'} src={currentUser?.photo ? currentUser?.photo : defaultAvatar}/>
            {editMod ? <input value={currentUser?.name} onChange={changeName} placeholder={'name'}></input>
               :
               <p> {currentUser?.name.toUpperCase()} </p>}
         </div>
         <div className={style.startDialog}>
                  <textarea placeholder={'write message...'} value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>
            <button disabled={!message} onClick={() => createDialog(currentUser, message)}>Start conversation
            </button>
         </div>
         <button className={style.editBtn} onClick={editModeHandler}>Edit Profile</button>
      </div>
   );
};

export default ProfileHeader;