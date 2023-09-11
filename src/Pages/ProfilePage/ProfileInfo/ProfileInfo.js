import React from 'react';
import style from "../ProfileInfo/ProfileInfo.module.scss";
import {BsHandThumbsDownFill} from "react-icons/bs";
import {DiNancy} from "react-icons/di";
import {SiAboutdotme, SiQuicklook} from "react-icons/si";

const ProfileInfo = ({editMod, currentUser, changeName, changeStatus, changeLookForJobStatus, changeAboutMe}) => {
   return (
      <>
         <div className={style.container}>
            <div className={style.statusWrapper}>
               <p className={style.title}><DiNancy fontSize={30}></DiNancy>Status</p>
               {editMod ?
                  <input value={currentUser?.status} onChange={changeStatus} placeholder={'status'}></input>
                  :
                  <p>{currentUser?.status || '---'}</p>}
            </div>
            <div className={style.wrapperLookingForJob}>
               <p className={style.title}><SiQuicklook fontSize={30}></SiQuicklook>Looking for job</p>
               {editMod ?
                  <input type={'checkbox'} checked={currentUser?.lookForJob} onChange={changeLookForJobStatus}
                         placeholder={'lookForJob'}></input>
                  :
                  <p>{currentUser?.lookForJob ? <BsHandThumbsDownFill className={style.up}  fontSize={30} color={'green'}></BsHandThumbsDownFill> : <BsHandThumbsDownFill  fontSize={30} color={'red'}></BsHandThumbsDownFill>}</p>}
            </div>
            <div className={style.aboutMe}>
               <p className={style.title}><SiAboutdotme fontSize={30}/>About me</p>
               {editMod ? <input value={currentUser?.aboutMe} onChange={changeAboutMe} placeholder={'about me'}/> :
                  <p>{currentUser?.aboutMe}</p>}
            </div>
         </div>
      </>
   );
};

export default ProfileInfo;