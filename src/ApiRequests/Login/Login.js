import axios from "axios";

export const loginRequest = {
   createUser(email, name, password, confirmPassword, photo, socialNetwork) {
      return axios.post('http://localhost:3001/users', {
         email,
         name,
         password,
         confirmPassword,
         photo: null,
         socialNetwork: null
      }, {
         headers: {
            "Content-Type": "application/json"
         }
      })
   },

   login(email, password) {
      return axios.post("http://localhost:3001/users/login", {
         email,
         password
      })
   }
}