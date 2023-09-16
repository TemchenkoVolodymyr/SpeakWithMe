import axios from "axios";
import {foundUserType, socialNetworkType} from "../../components/Header/Search/SearchTypes";


type updateUserType  = {
      email:string,
      name: string,
      aboutMe: string,
      lookForJob: string,
      status: string,
      socialNetwork:  socialNetworkType
}

type updateUserResponseType = {
    status:string,
    data:{
        date:foundUserType
    }
}

type getUsersResponseType = {
    status: string,
    results: number,
    data: {result : Array<foundUserType>}
}
type getUserResponseType = {
    status: string,
    data: {doc:foundUserType}
}
export const UserProfile = {
   updateUser(idUser : string ,dataToChange : updateUserType ) {

      return axios.patch<updateUserResponseType>(`http://localhost:3001/users/${idUser}`,{
         email:dataToChange.email,
         name:dataToChange.name,
         aboutMe:dataToChange.aboutMe,
         status:dataToChange.status,
         lookForJob:dataToChange.lookForJob,
         socialNetwork:dataToChange.socialNetwork
      })
   },
   getUsers() {
      return axios.get<getUsersResponseType>('http://localhost:3001/users')
   },
   getUser(idUser : string) {

      return axios.get<getUserResponseType>(`http://localhost:3001/users/${idUser}`)
   }
}

