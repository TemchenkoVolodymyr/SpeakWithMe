import axios from "axios";

export const Posts = {
   createPost(dataOfPost : any) {
      return axios.post(`http://localhost:3001/posts`,{
         post:dataOfPost.post,
         authorName:dataOfPost.authorName,
         authorId:dataOfPost.authorId,
         recipientId:dataOfPost.recipientId,
         date:new Date().toLocaleDateString()
      })
   },
   getPosts(idUser : any){
      return axios.get(`http://localhost:3001/posts/${idUser}`)
   }
}