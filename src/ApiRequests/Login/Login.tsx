import axios from "axios";
import {foundUserType, socialNetworkType} from "../../components/Header/Search/SearchTypes";

type createUserResponseType = {
   status:string,
   token:string,
   data:{user:foundUserType}
}

export const loginRequest = {
   createUser(email : string, name : string, password : string, confirmPassword : string, photo : string | null, socialNetwork : socialNetworkType) {
      return axios.post<createUserResponseType>('http://localhost:3001/users', {
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
      return axios.post<createUserResponseType>("http://localhost:3001/users/login", {
         email,
         password
      })
   }
}