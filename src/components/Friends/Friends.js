import React from 'react';
import {useSelector} from "react-redux";
import style from './Friends.module.scss'
import defaultImage from '../../assets/Avatar/default.jpg'
import {subFriends} from "../../ApiRequests/SubFriends/SubFriends";

const Friends = () => {

   const users = useSelector((state) => state.users)
   const authUserData = useSelector((state) => state.authUser)

   const filterUsers = users.filter(user => user._id !== authUserData._id)

   const subscribe = (idUser) => {
      subFriends.getSubscribedFriends(authUserData._id).then(res => {
         if(res.status === 200 ) {
          if(res.data.result >= 1) {

             const findCurrentAuthUserSubscribes = res.data.data.result.find(item => item.authUserId === authUserData._id)
             const checkIsSubscribed = findCurrentAuthUserSubscribes.subscribedFriendsId.find(item => item === idUser)
             console.log(checkIsSubscribed)
             if(!checkIsSubscribed) {
                findCurrentAuthUserSubscribes.subscribedFriendsId.push(idUser)
             }else{
                return
             }


             subFriends.addNewSubscribe(findCurrentAuthUserSubscribes.authUserId,findCurrentAuthUserSubscribes.subscribedFriendsId)
          }else{
             subFriends.firstSubscribe(authUserData._id,[idUser]).then(res => console.log(res.data))
          }

         }
      }).catch(err => console.log(err))
   }
   return (
      <div className={style.container}>
         {filterUsers && filterUsers.map(user => <div className={style.wrapperItem}>
            <div className={style.wrapperImage}>
               <img src={user.photo || defaultImage} alt={'avatar'}/>
               <p>{user.name}</p>
               <button onClick={() => subscribe(user._id)}>Subscribe</button>
            </div>
            <p>{user.aboutMe || 'I dont have any information about me '}</p>
         </div>)}
      </div>
   );
};

export default Friends;