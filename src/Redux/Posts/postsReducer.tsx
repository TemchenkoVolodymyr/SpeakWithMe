import {initialState} from "../initialState";
import {PostType} from "../initialStateType";
import {postsActionType} from "./postsAC";

export const SET_POSTS = "SET_POSTS"

type postsActionsTypes = postsActionType
export const postsReducer = (posts = initialState.postsCurrentUser,action : postsActionsTypes) : Array<PostType>  => {
switch (action.type){

case SET_POSTS : {
   return action.newPosts
}
   default : return posts
}
}