import React from 'react';
import style from './ProfilePosts.module.scss'

const ProfilePosts = ({currentUserPosts,postText,createNewPostHandler,setPostText}) => {
   return (
    <div className={style.container}>
       <div className={style.wrapper}>
         {currentUserPosts && currentUserPosts.data.result.map(post => <div className={style.wrapperPost}>
            <div className={style.wrapperInfo}>
               <p>{post?.authorName}</p>
               <p>{post?.date}</p>
            </div>
            <div>
               <p>{post?.post}</p>
            </div>
         </div>)}
       </div>
       <div className={style.wrapperTextarea}>
          <textarea placeholder={'type...'} value={postText} onChange={(e) => setPostText(e.target.value)}></textarea>
          <button disabled={!postText} onClick={createNewPostHandler}>send</button>
       </div>
    </div>
   );
};

export default ProfilePosts;