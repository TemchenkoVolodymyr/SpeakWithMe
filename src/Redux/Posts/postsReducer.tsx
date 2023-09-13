import {initialState} from "../initialState.tsx";
import {PostType} from "../initialStateType";

export const SET_POSTS = "SET_POSTS"
export const postsReducer = (posts = initialState.postsCurrentUser,action) : Array<PostType>  => {
switch (action.type){

case SET_POSTS : {
   return action.newPosts
}
   default : return posts
}
}