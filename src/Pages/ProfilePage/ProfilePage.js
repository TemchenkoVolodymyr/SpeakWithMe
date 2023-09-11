import React, {useEffect, useState} from 'react';
import style from './ProfilePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import defaultAvatar from '../../assets/Avatar/default.png'
import NetworkLinks from "./NetworkLinks";
import {
   changeAboutMeAC,
   changeLookForJob,
   changeStatusAC,
   changeUserNameAC
} from "../../Redux/Authorization/authorizationAC";
import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {postsAC} from "../../Redux/Posts/postsAC";
import {userAC} from "../../Redux/Users/User/userAC";
import {useParams} from "react-router-dom";
import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./Posts";
import {Posts} from "../../ApiRequests/Profile/Posts";

const ProfilePage = () => {

   const [editMod, setEditMode] = useState(false)
   const [postText, setPostText] = useState("")

   const dispatch = useDispatch()
   const authUserData = useSelector((state) => state.authUser)
   const currentUserPosts = useSelector((state) => state.postsCurrentUser)
   const currentUser = useSelector((state) => state.user)

   const [choseItem, setChoseItem] = useState('aboutMe')
   let {idUserProfile} = useParams()

   const [message, setMessage] = useState("")

   useEffect(() => {
      if (!idUserProfile) idUserProfile = authUserData._id
      UserProfile.getUser(idUserProfile).then(res => dispatch(userAC(res.data.data.doc)))
   }, [idUserProfile])

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
      dispatch(changeLookForJob(e.target.checked))
   }

   useEffect(() => {
      Posts.getPosts(currentUser?._id).then(res => dispatch(postsAC(res.data)))
   }, [currentUser])
   const createNewPostHandler = () => {
      const dataOfPost = {
         post: postText,
         authorName: currentUser.name,
         authorId: currentUser._id,
         recipientId: authUserData._id
      }
      Posts.createPost(dataOfPost).then(res => {
         if (res.status === 200) {
            Posts.getPosts(authUserData._id).then(res => dispatch(postsAC(res.data)))
            setPostText("")
         }
      })
   }

   const createDialog = (interlocutor, message) => {
      DialogFunctions.getDialogsCurrentAuthUser(authUserData._id).then(res => {
         if (res.data.data.dialogs.length >= 1) {
            DialogFunctions.addNewDialogs(authUserData._id, interlocutor, message).then(res => console.log(res))
         } else {
            DialogFunctions.createDialog(authUserData._id, interlocutor, message)
         }
      })

   }

   const itemsOfList = ["aboutMe", "networks", "posts"]

   return (
      <>
         <div className={style.container}>
            <div className={style.wrapperAvatar}>
               <div className={style.avatar}>
                  <img alt={'avatar'} src={currentUser?.photo ? currentUser?.photo : defaultAvatar}/>
                  {editMod ? <input value={currentUser?.name} onChange={changeName} placeholder={'name'}></input>
                     :
                     <p> {currentUser?.name.toUpperCase()} </p>}
               </div>
               <div className={style.startDialog}>
                  <textarea placeholder={'write message...'} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                  <button onClick={() => createDialog(currentUser, message)}>Start conversation</button>
               </div>
               <button className={style.editBtn} onClick={editModeHandler}>Edit Profile</button>
            </div>
            <div className={style.itemsLink}>
               {itemsOfList.map(item => <button className={choseItem === item ? style.active : null} onClick={() => setChoseItem(item)}>{item}</button>)}
            </div>


               <div className={style.wrapperList}>
                  {choseItem === 'aboutMe' ? <ProfileInfo editMod={editMod} changeLookForJobStatus={changeLookForJobStatus}
                                                          changeName={changeName} changeStatus={changeStatus}
                                                          currentUser={currentUser} changeAboutMe={changeAboutMe}
                  >
                  </ProfileInfo> : choseItem === "networks" ?
                     <NetworkLinks editMode={editMod} userData={currentUser}></NetworkLinks>
                     :   <ProfilePosts setPostText={setPostText} createNewPostHandler={createNewPostHandler} postText={postText} currentUserPosts={currentUserPosts}></ProfilePosts> }


               </div>
         </div>

      </>
   );
};

export default ProfilePage;