import React, {useState} from 'react';
import style from './ProfilePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import defaultAvatar from '../../assets/Avatar/default.jpg'
import NetworkLinks from "./NetworkLinks";
import {
   changeAboutMeAC,
   changeLookForJob,
   changeStatusAC,
   changeUserNameAC
} from "../../Redux/Authorization/authorizationAC";
import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";

const ProfilePage = () => {

   const [editMod, setEditMode] = useState(false)

   const dispatch = useDispatch()
   const authUserData = useSelector((state) => state.authUser)
   console.log(authUserData)
   const changeName = (e) => {
      dispatch(changeUserNameAC(e.target.value))
   }

   const changeStatus = (e) => {
      dispatch(changeStatusAC(e.target.value))
   }

   const changeAboutMe = (e) => {
      dispatch(changeAboutMeAC(e.target.value))
   }

   const editModeHandler = () => {
      console.log(authUserData.lookForJob)
      if (!editMod) {
         setEditMode(!editMod)
      } else {
         UserProfile.updateUser(authUserData._id, {
            email: authUserData.email,
            name: authUserData.name,
            aboutMe: authUserData.aboutMe,
            lookForJob: authUserData.lookForJob,
            status: authUserData.status,
            socialNetwork: authUserData.socialNetwork
         })
         setEditMode(!editMod)
      }

   }

   const changeLookForJobStatus = (e) => {
      console.log(e.target.checked)
      dispatch(changeLookForJob(e.target.checked))
   }
   return (
      <div className={style.container}>
         <div className={style.wrapperAvatar}>
            <img alt={'avatar'} src={authUserData.photo ? authUserData.photo : defaultAvatar}/>
            <button className={style.editBtn} onClick={editModeHandler}>Edit Profile</button>
            {editMod ?
               <input value={authUserData.name} onChange={changeName} placeholder={'name'}></input>
               :
               <p> {authUserData.name} </p>}

            {editMod ?
               <input value={authUserData.status} onChange={changeStatus} placeholder={'status'}></input>
               :
               <p><span>Status :</span> {authUserData.status ? authUserData.status : "---"}</p>}

            <div>
               <p>Looking for job</p>
               {editMod ?
                     <input type={'checkbox'} checked={authUserData.lookForJob} onChange={changeLookForJobStatus} placeholder={'lookForJob'}></input>
                  :
                  <p>{authUserData?.lookForJob ? 'Yes' : "No"}</p>}
            </div>
         </div>
         <div className={style.wrapperAboutMe}>
            <div className={style.aboutMe}>
               <p>About me</p>
               {editMod ? <input value={authUserData.aboutMe} onChange={changeAboutMe} placeholder={'about me'}/> :
                  <p>{authUserData?.aboutMe}</p>}
            </div>
            <div className={style.wrapperList}>
               <NetworkLinks editMode={editMod} userData={authUserData}></NetworkLinks>
            </div>
         </div>
      </div>
   );
};

export default ProfilePage;