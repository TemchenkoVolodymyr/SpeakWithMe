import axios from "axios";

export const loginRequest = {
   createUser(email : string, name : string, password : string, confirmPassword : string, photo : string, socialNetwork : any) {
      return axios.post('http://localhost:3001/users', {
         email,
         name,
         password,
         confirmPassword,
         photo: photo || null,
         socialNetwork: socialNetwork || null
      }, {
         headers: {
            "Content-Type": "application/json"
         }
      })
   },

   login(email : string, password : string) {
      return axios.post("http://localhost:3001/users/login", {
         email,
         password
      })
   }
}