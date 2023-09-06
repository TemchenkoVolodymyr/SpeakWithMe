import {SET_POSTS} from "./postsReducer";

export const postsAC = (newPosts) => {
return{
   type:SET_POSTS,
   newPosts
}
}