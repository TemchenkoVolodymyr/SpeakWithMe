import React, {useState} from 'react';
import style from './ProfilePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import defaultAvatar from '../../assets/Avatar/default.jpg'
import NetworkLinks from "./NetworkLinks";
import {changeAboutMeAC, changeStatusAC, changeUserNameAC} from "../../Redux/Authorization/authorizationAC";

const ProfilePage = () => {

   const [editMod, setEditMode] = useState(true)

   const dispatch = useDispatch()
   const authUserData = useSelector((state) => state.authUser)

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
      if(!editMod) {
         setEditMode(!editMod)
      }else{


         setEditMode(!editMod)
      }

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
               {editMod ? <input value={authUserData?.lookForJob === 'true' ? 'Yes' : "No"} placeholder={'lookForJob'}></input>
                  :
                  <p>{authUserData?.lookForJob === 'true' ? 'Yes' : "No"}</p> }
            </div>
         </div>
         <div className={style.wrapperAboutMe}>
            <div className={style.aboutMe}>
               <p>About me</p>
               {editMod ? <input value={authUserData.aboutMe} onChange={changeAboutMe} placeholder={'about me'}/> : <p>{authUserData?.aboutMe}</p> }
            </div>
            <div className={style.wrapperList}>
               <NetworkLinks></NetworkLinks>
            </div>
         </div>
      </div>
   );
};

export default ProfilePage;