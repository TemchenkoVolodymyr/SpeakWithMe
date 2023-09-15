import {initialState} from "../initialState";
import {PostType} from "../initialStateType";
import {postsActionType} from "./postsAC";
import {currentUserPostsType} from "../../Pages/ProfilePage/ProfilePosts/ProfilePosts";

export const SET_POSTS = "SET_POSTS"

type postsActionsTypes = postsActionType
export const postsReducer = (posts = initialState.postsCurrentUser,action : postsActionsTypes) : currentUserPostsType  => {
switch (action.type){

case SET_POSTS : {
   return action.newPosts
}
   default : return posts
}
}