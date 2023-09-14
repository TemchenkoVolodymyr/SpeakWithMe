import React from 'react';
import style from "../ProfileInfo/ProfileInfo.module.scss";
import {BsHandThumbsDownFill} from "react-icons/bs";
import {DiNancy} from "react-icons/di";
import {SiAboutdotme, SiQuicklook} from "react-icons/si";
import AboutMeSection from "./AboutMeSection/AboutMeSection";

const ProfileInfo = (props :any) => {
   const {editMod , currentUser, changeStatus, changeLookForJobStatus, changeAboutMe} = props

   return (
      <>
         <div className={style.container}>
            <AboutMeSection value={currentUser?.status} placeholder={'status'}
                            editMod={editMod}
                            callback={changeStatus} title={'Status'}
                            icon={<DiNancy fontSize={30}/>} inputType={'text'}
            ></AboutMeSection>


            <AboutMeSection value={currentUser?.lookForJob} callback={changeLookForJobStatus}
                            title={'Looking for job'} icon={<SiQuicklook fontSize={30}/>}
                            editMod={editMod} placeholder={'looking for job'} inputType={"checkbox"}
                            isLooking={currentUser?.lookForJob ?
                     <BsHandThumbsDownFill className={style.up} color={'green'} fontSize={40}/>
                     :
                     <BsHandThumbsDownFill color={'red'} fontSize={40}/>}
            ></AboutMeSection>
            
            <AboutMeSection value={currentUser?.aboutMe} placeholder={'about me'}
                            editMod={editMod}
                            callback={changeAboutMe} title={'About me'}
                            icon={<SiAboutdotme fontSize={30}/>} inputType={'text'}
            ></AboutMeSection>
         </div>
      </>
   );
};

export default ProfileInfo;