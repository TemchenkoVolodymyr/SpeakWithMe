import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './Friends.module.scss'
import {subFriends} from "../../ApiRequests/SubFriends/SubFriends";
import {subscribesAC} from "../../Redux/Subscribes/subscribesAC.tsx";
import {friendsThunkCreator} from "./FriendsRedux/friendsThunkCreator";
import Friend from "./Friend/Friend";

const Friends = () => {

   const users = useSelector((state) => state.users)
   const authUserData = useSelector((state) => state.authUser)
   const dispatch = useDispatch()
   const filterUsers = users.filter(user => user._id !== authUserData._id)
   const subscribers = useSelector((state) => state.subscribers)

   const subscribe = (idUser) => {

      dispatch(friendsThunkCreator(authUserData, idUser))
   }

   useEffect(() => {
      subFriends.getSubscribedFriends(authUserData._id).then(res => dispatch(subscribesAC(...res.data.data.result)))
   }, [authUserData])

   return (
      <div className={style.container}>
         {filterUsers && filterUsers.map(user => <Friend user={user}
                                                         subscribers={subscribers}
                                                         subscribe={subscribe}></Friend>)}

      </div>
   );
};

export default Friends;