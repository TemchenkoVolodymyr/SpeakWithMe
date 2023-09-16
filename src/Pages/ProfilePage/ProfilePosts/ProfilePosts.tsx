import React from 'react';
import style from './ProfilePosts.module.scss'
import Post, {postType} from "./Post/Post";
import {getPostsResponseType} from "../../../ApiRequests/Profile/Posts";

export type currentUserPostsType = {
    data:{
        result:Array<postType>
    },
    result:number,
    status:string
}
type profilePostsType = {
    createNewPostHandler:any,
    setPostText:any,
    postText:string,
    currentUserPosts:getPostsResponseType



}
const ProfilePosts = (props : profilePostsType) => {
    const {currentUserPosts,postText,createNewPostHandler,setPostText} = props
   return (
    <div className={style.container}>
       <div className={style.wrapper}>
         {currentUserPosts && currentUserPosts.data.result.map((post: any) => <Post post={post}></Post>)}
       </div>
       <div className={style.wrapperTextarea}>
          <textarea placeholder={'type...'} value={postText} onChange={(e) => setPostText(e.target.value)}></textarea>
          <button disabled={!postText} onClick={createNewPostHandler}>send</button>
       </div>
    </div>
   );
};

export default ProfilePosts;