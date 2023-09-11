import React from 'react';
import style from "../ProfileInfo/ProfileInfo.module.scss";
import {BsHandThumbsDownFill} from "react-icons/bs";

const ProfileInfo = ({editMod, currentUser, changeName, changeStatus, changeLookForJobStatus, changeAboutMe}) => {
   return (
      <>
         <div className={style.container}>
            <div className={style.statusWrapper}>
               <p className={style.title}>Status</p>
               {editMod ?
                  <input value={currentUser?.status} onChange={changeStatus} placeholder={'status'}></input>
                  :
                  <p className={style.status}>{currentUser?.status || '---'}</p>}
            </div>
            <div className={style.wrapperLookingForJob}>
               <p className={style.title}>Looking for job</p>
               {editMod ?
                  <input type={'checkbox'} checked={currentUser?.lookForJob} onChange={changeLookForJobStatus}
                         placeholder={'lookForJob'}></input>
                  :
                  <p>{currentUser?.lookForJob ? <BsHandThumbsDownFill className={style.up}  fontSize={30} color={'green'}></BsHandThumbsDownFill> : <BsHandThumbsDownFill  fontSize={30} color={'red'}></BsHandThumbsDownFill>}</p>}
            </div>
            <div className={style.aboutMe}>
               <p className={style.title}>About me</p>
               {editMod ? <input value={currentUser?.aboutMe} onChange={changeAboutMe} placeholder={'about me'}/> :
                  <p>{currentUser?.aboutMe}</p>}
            </div>
         </div>
      </>
   );
};

export default ProfileInfo;