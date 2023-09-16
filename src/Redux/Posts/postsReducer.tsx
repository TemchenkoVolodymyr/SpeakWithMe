import {initialState} from "../initialState";
import {postsActionType} from "./postsAC";
import {currentUserPostsType} from "../../Pages/ProfilePage/ProfilePosts/ProfilePosts";
import {getPostsResponseType} from "../../ApiRequests/Profile/Posts";

export const SET_POSTS = "SET_POSTS"

type postsActionsTypes = postsActionType
export const postsReducer = (posts = initialState.postsCurrentUser,action : postsActionsTypes) : getPostsResponseType  => {
switch (action.type){

case SET_POSTS : {
   return action.newPosts
}
   default : return posts
}
}