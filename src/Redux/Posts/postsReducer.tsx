import {initialState} from "../initialState";
import {PostType} from "../initialStateType";

export const SET_POSTS = "SET_POSTS"
export const postsReducer = (posts = initialState.postsCurrentUser,action : any) : Array<PostType>  => {
switch (action.type){

case SET_POSTS : {
   return action.newPosts
}
   default : return posts
}
}