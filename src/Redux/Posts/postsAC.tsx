import {SET_POSTS} from "./postsReducer";
import {PostType} from "../initialStateType";

export type postsActionType = {
    type: typeof SET_POSTS,
    newPosts: Array<PostType>
}
export const postsAC = (newPosts: Array<PostType>): postsActionType => {
    return {
        type: SET_POSTS,
        newPosts
    }
}