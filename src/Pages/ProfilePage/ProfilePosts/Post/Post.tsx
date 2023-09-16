import React from 'react';
import style from "../ProfilePosts.module.scss";

export type postType = {
    post:{
        authorId: string,
        authorName: string
        date: string
        post: string
        recipientId: string
        _id: string
    }
}
const Post = (props: postType) => {

    const {post} = props
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