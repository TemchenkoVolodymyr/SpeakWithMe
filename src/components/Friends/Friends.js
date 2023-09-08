import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './Friends.module.scss'
import defaultImage from '../../assets/Avatar/default.jpg'
import {subFriends} from "../../ApiRequests/SubFriends/SubFriends";
import {subscribesAC} from "../../Redux/Subscribes/subscribesAC";

const Friends = () => {

   const users = useSelector((state) => state.users)
   const authUserData = useSelector((state) => state.authUser)
   const dispatch = useDispatch()
   const filterUsers = users.filter(user => user._id !== authUserData._id)
   const subscribers = useSelector((state) => state.subscribers)

   const subscribe = (idUser) => {
      subFriends.getSubscribedFriends(authUserData._id).then(res => {
         if (res.status === 200) {
            if (res.data.result >= 1) {

               const findCurrentAuthUserSubscribes = res.data.data.result.find(item => item.authUserId === authUserData._id)
               const checkIsSubscribed = findCurrentAuthUserSubscribes.subscribedFriendsId.find(item => item === idUser)

               if (!checkIsSubscribed) {
                  findCurrentAuthUserSubscribes.subscribedFriendsId.push(idUser)
               } else {
                  const index = findCurrentAuthUserSubscribes.subscribedFriendsId.indexOf(checkIsSubscribed)
                  findCurrentAuthUserSubscribes.subscribedFriendsId.splice(index,1)
               }


               subFriends.addNewSubscribe(findCurrentAuthUserSubscribes.authUserId, findCurrentAuthUserSubscribes.subscribedFriendsId)
            } else {
               subFriends.firstSubscribe(authUserData._id, [idUser]).then(res => console.log(res.data))
            }

         }
         dispatch(subscribesAC(...res.data.data.result))
      }).catch(err => console.log(err))
   }

   useEffect(() => {
      subFriends.getSubscribedFriends(authUserData._id).then(res => dispatch(subscribesAC(...res.data.data.result)))
   }, [authUserData])

   return (
      <div className={style.container}>
         {filterUsers && filterUsers.map(user => <div className={style.wrapperItem}>
            <div className={style.wrapperImage}>
               <img src={user.photo || defaultImage} alt={'avatar'}/>
               <p>{user.name}</p>
               {subscribers?.subscribedFriendsId.find(sub => sub === user._id ) ? <button className={style.unsubStyle} onClick={() => subscribe(user._id)}>Unsub</button> : <button className={style.subStyle} onClick={() => subscribe(user._id)}>Sub</button>}
            </div>
            <p>{user.aboutMe || 'I dont have any information about me '}</p>
         </div>)}
      </div>
   );
};

export default Friends;