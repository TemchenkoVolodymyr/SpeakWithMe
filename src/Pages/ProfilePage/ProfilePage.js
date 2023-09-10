import React, {useEffect, useState} from 'react';
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
import {Posts} from "../../ApiRequests/Profile/Posts";
import {postsAC} from "../../Redux/Posts/postsAC";
import {userAC} from "../../Redux/Users/User/userAC";
import {useParams} from "react-router-dom";
import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";

const ProfilePage = () => {

   const [editMod, setEditMode] = useState(false)
   const [postText, setPostText] = useState("")

   const dispatch = useDispatch()
   const authUserData = useSelector((state) => state.authUser)
   const currentUserPosts = useSelector((state) => state.postsCurrentUser)
   const currentUser = useSelector((state) => state.user)
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
         }else{
            DialogFunctions.createDialog(authUserData._id, interlocutor, message)
         }
      })

   }
   return (
      <>
         <div className={style.container}>
            <div className={style.wrapperAvatar}>
               <img alt={'avatar'} src={currentUser?.photo ? currentUser?.photo : defaultAvatar}/>
               <button className={style.editBtn} onClick={editModeHandler}>Edit Profile</button>
               <div>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                  <button onClick={() => createDialog(currentUser, message)}>Start conversation</button>
               </div>
               {editMod ?
                  <input value={currentUser?.name} onChange={changeName} placeholder={'name'}></input>
                  :
                  <p> {currentUser?.name} </p>}

               {editMod ?
                  <input value={currentUser?.status} onChange={changeStatus} placeholder={'status'}></input>
                  :
                  <p><span>Status :</span> {currentUser?.status ? currentUser?.status : "---"}</p>}

               <div>
                  <p>Looking for job</p>
                  {editMod ?
                     <input type={'checkbox'} checked={currentUser?.lookForJob} onChange={changeLookForJobStatus}
                            placeholder={'lookForJob'}></input>
                     :
                     <p>{currentUser?.lookForJob ? 'Yes' : "No"}</p>}
               </div>
            </div>
            <div className={style.wrapperAboutMe}>
               <div className={style.aboutMe}>
                  <p>About me</p>
                  {editMod ? <input value={currentUser?.aboutMe} onChange={changeAboutMe} placeholder={'about me'}/> :
                     <p>{currentUser?.aboutMe}</p>}
               </div>
               <div className={style.wrapperList}>
                  <NetworkLinks editMode={editMod} userData={currentUser}></NetworkLinks>
               </div>
            </div>
         </div>
         <div>
            <textarea value={postText} onChange={(e) => setPostText(e.target.value)}></textarea>
            <button onClick={createNewPostHandler}>send</button>
         </div>
         <div>
            {currentUserPosts && currentUserPosts.data.result.map(post => <div>
               <div>
                  <p>{post?.authorName}</p>
                  <p>{post?.date}</p>
               </div>
               <div>
                  <p>{post?.post}</p>
               </div>
            </div>)}
         </div>
      </>
   );
};

export default ProfilePage;