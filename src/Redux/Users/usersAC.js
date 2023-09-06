import {SET_USERS} from "./usersReducer";

export const usersAC = (newUsers) => {
   return {
      type: SET_USERS,
      newUsers
   }
}