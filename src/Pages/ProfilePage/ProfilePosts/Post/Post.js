import React from 'react';
import style from "../ProfilePosts.module.scss";

const Post = ({post}) => {
   return (
      <div className={style.wrapperPost}>
         <div className={style.wrapperInfo}>
            <p>{post?.authorName}</p>
            <p>{post?.date}</p>
         </div>
         <div>
            <p>{post?.post}</p>
         </div>
      </div>
   );
};

export default Post;