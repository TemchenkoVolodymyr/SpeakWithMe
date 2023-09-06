import axios from "axios";

export const UserProfile = {
   updateUser(idUser,dataToChange) {
console.log(dataToChange)
      return axios.patch(`http://localhost:3001/users/${idUser}`,{
         email:dataToChange.email,
         name:dataToChange.name,
         aboutMe:dataToChange.aboutMe,
         status:dataToChange.status,
         lookForJob:dataToChange.lookForJob,
         socialNetwork:dataToChange.socialNetwork
      })
   }
}