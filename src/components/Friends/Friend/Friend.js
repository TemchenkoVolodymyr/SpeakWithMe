import React from 'react';
import style from "../Friend/Friend.module.scss";
import {NavLink} from "react-router-dom";
import defaultImage from "../../../assets/Avatar/default.png";

const Friend = ({user,subscribers,subscribe}) => {
   return (
    <>
       <div className={style.wrapperItem}>

          <div className={style.wrapperImage}>
             <NavLink to={`/profile/${user._id}`}><img src={user.photo || defaultImage} alt={'avatar'}/></NavLink>
             <NavLink to={`/profile/${user._id}`}>{user.name}</NavLink>
             {subscribers?.subscribedFriendsId.find(sub => sub === user._id ) ? <button className={style.unsubStyle} onClick={() => subscribe(user._id)}>Unfollow</button> : <button className={style.subStyle} onClick={() => subscribe(user._id)}>Follow</button>}
          </div>
          <div className={style.aboutMe}>
             <p className={style.aboutMeText}>About me</p>
             <p >{user.aboutMe || 'I dont have any information about me '}</p>
          </div>

       </div>
    </>
   )
};

export default Friend;