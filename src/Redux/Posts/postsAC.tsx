import {SET_POSTS} from "./postsReducer";
import {PostType} from "../initialStateType";
import {currentUserPostsType} from "../../Pages/ProfilePage/ProfilePosts/ProfilePosts";

export type postsActionType = {
    type: typeof SET_POSTS,
    newPosts: currentUserPostsType
}
export const postsAC = (newPosts: currentUserPostsType): postsActionType => {
    console.log(newPosts)
    return {
        type: SET_POSTS,
        newPosts
    }
}