import {initialState} from "../initialState";

export const SET_USERS = "SET_USERS"
export const usersReducer = (users = initialState.users,action) => {
   switch (action.type) {
      case SET_USERS : return  action.newUsers
      default : return users
   }
}