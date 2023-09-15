import React from 'react';
import style from "../Friend/Friend.module.scss";
import {NavLink} from "react-router-dom";
import defaultImage from "../../../assets/Avatar/default.png";
import {foundUserType} from "../../Header/Search/SearchTypes";
import {subscribersType} from "../../../Redux/initialStateType";

type FriendPropsType = {
    subscribe:Function,
    subscribers: subscribersType ,
    user:foundUserType

}

const Friend = (props : FriendPropsType) => {

    const {user,subscribers ,subscribe} = props

   return (
    <>
       <div className={style.wrapperItem}>

          <div className={style.wrapperImage}>
             <NavLink to={`/profile/${user?._id}`}><img src={user?.photo || defaultImage} alt={'avatar'}/></NavLink>
             <NavLink to={`/profile/${user?._id}`}>{user?.name}</NavLink>
             {subscribers && subscribers[0]?.subscribedFriendsId.find((sub : any)  => sub === user?._id ) ?
                 <button className={style.unsubStyle} onClick={() => subscribe(user?._id)}>Unfollow</button>
                 :
                 <button className={style.subStyle} onClick={() => subscribe(user?._id)}>Follow</button>}
          </div>
          <div className={style.aboutMe}>
             <p className={style.aboutMeText}>About me</p>
             <p >{user?.aboutMe || 'I dont have any information about me '}</p>
          </div>

       </div>
    </>
   )
};

export default Friend;