import React, {useEffect, useState} from 'react';
import style from './ProfilePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import NetworkLinks from "./NetworkLinks/NetworkLinks";
import {
   changeAboutMeAC,
   changeLookForJob,
   changeStatusAC,
   changeUserNameAC
} from "../../Redux/Authorization/authorizationAC";
import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {useNavigate, useParams} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import {
   createDialogRoomHandler,
   createPostThunkCreator,
   getUserPostsThunkCreator,
   getUserThunkCreator
} from "../../Redux/ProfilePage/ProfilePageThunkCreator";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import {useAppSelector} from "../../Hooks/Hooks";

const ProfilePage = () => {

   const [editMod, setEditMode] = useState(false)
   const [postText, setPostText] = useState("")

   const dispatch = useDispatch()
   const authUserData = useAppSelector((state) => state.authUser)
   const currentUserPosts = useAppSelector((state) => state.postsCurrentUser)
   const currentUser = useAppSelector((state) => state.user)
   const [choseItem, setChoseItem] = useState('aboutMe')
   let {idUserProfile  } : any  = useParams()
   const [message, setMessage] = useState("")
   const navigate = useNavigate()

   useEffect(() => {
      if (!idUserProfile) idUserProfile = authUserData._id

      dispatch<any>(getUserThunkCreator(idUserProfile))
   }, [idUserProfile])

   const changeName = (e:any) => {
      dispatch(changeUserNameAC(e.target.value))
   }

   const changeStatus = (e:any) => {
      dispatch(changeStatusAC(e.target.value))
   }

   const changeAboutMe = (e:any) => {
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

   const changeLookForJobStatus = (e:any) => {
      dispatch(changeLookForJob(e.target.checked))
   }

   useEffect(() => {

      dispatch<any>(getUserPostsThunkCreator(currentUser ))

   }, [currentUser])
   const createNewPostHandler = () => {
      const dataOfPost = {
         post: postText,
         authorName: authUserData.name,
         authorId: authUserData._id,
         recipientId: currentUser?._id
      }
      dispatch<any>(createPostThunkCreator(dataOfPost, currentUser, setPostText))
   }

   const createDialog = (interlocutor : any, message : any) => {
      createDialogRoomHandler(authUserData, interlocutor, message, setMessage, navigate)
   }

   const itemsOfList = ["aboutMe", "networks", "posts"]

   return (
      <>
         <div className={style.container}>
            <ProfileHeader currentUser={currentUser} editMod={editMod}
                           message={message}
                           createDialog={createDialog}
                           editModeHandler={editModeHandler}
                           setMessage={setMessage}
                           changeName={changeName}
            ></ProfileHeader>
            <div className={style.itemsLink}>
               {itemsOfList.map(item => <button className={choseItem === item ? style.active : null}
                                                onClick={() => setChoseItem(item)}>{item}</button>)}
            </div>


            <div className={style.wrapperList}>
               {choseItem === 'aboutMe' ? <ProfileInfo editMod={editMod} changeLookForJobStatus={changeLookForJobStatus}
                                                       changeName={changeName} changeStatus={changeStatus}
                                                       currentUser={currentUser} changeAboutMe={changeAboutMe}
               >
               </ProfileInfo> : choseItem === "networks" ?
                  <NetworkLinks editMode={editMod} userData={currentUser}></NetworkLinks>
                  : <ProfilePosts setPostText={setPostText} createNewPostHandler={createNewPostHandler}
                                  postText={postText} currentUserPosts={currentUserPosts}></ProfilePosts>}
            </div>
         </div>

      </>
   );
};

export default ProfilePage;