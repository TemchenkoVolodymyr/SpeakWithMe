import {SET_POSTS} from "./postsReducer";
import {getPostsResponseType} from "../../ApiRequests/Profile/Posts";

export type postsActionType = {
    type: typeof SET_POSTS,
    newPosts: getPostsResponseType
}
export const postsAC = (newPosts: getPostsResponseType): postsActionType => {
    console.log(newPosts)
    return {
        type: SET_POSTS,
        newPosts
    }
}