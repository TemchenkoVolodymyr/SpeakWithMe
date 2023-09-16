import axios from "axios";
import {dataOfPostType} from "../../Redux/ProfilePage/ProfilePageThunkCreator";
import {postType} from "../../Pages/ProfilePage/ProfilePosts/Post/Post";

type createPostResponseType = {
    data: postType,
    status: string
}

export type getPostsResponseType = {
        data: {
            result: [{
                authorId: string,
                authorName: string
                date: string
                post: string
                recipientId: string
                _id: string
            }]
        }
        result: number,
        status: string
}
export const Posts = {
    createPost(dataOfPost: dataOfPostType) {
        return axios.post<createPostResponseType>(`http://localhost:3001/posts`, {
            post: dataOfPost.post,
            authorName: dataOfPost.authorName,
            authorId: dataOfPost.authorId,
            recipientId: dataOfPost.recipientId,
            date: new Date().toLocaleDateString()
        })
    },
    getPosts(idUser: string) {
        return axios.get<getPostsResponseType>(`http://localhost:3001/posts/${idUser}`)
    }
}