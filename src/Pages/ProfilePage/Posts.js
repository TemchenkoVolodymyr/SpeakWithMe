import React from 'react';

const ProfilePosts = ({currentUserPosts,postText,createNewPostHandler,setPostText}) => {
   return (
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
       <div>
          <textarea value={postText} onChange={(e) => setPostText(e.target.value)}></textarea>
          <button onClick={createNewPostHandler}>send</button>
       </div>
    </div>
   );
};

export default ProfilePosts;