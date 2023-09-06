import {initialState} from "../initialState";

export const SET_POSTS = "SET_POSTS"
export const postsReducer = (posts = initialState.postsCurrentUser,action) => {
switch (action.type){

case SET_POSTS : {
   return action.newPosts
}
   default : return posts
}
}