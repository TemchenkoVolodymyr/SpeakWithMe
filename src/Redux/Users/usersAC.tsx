import {SET_USERS} from "./usersReducer";
import {foundUserType} from "../../components/Header/Search/SearchTypes";

export type usersActionType = {
    type: typeof SET_USERS,
    newUsers: Array<foundUserType>
}

export const usersAC = (newUsers: Array<foundUserType>): usersActionType => {
    return {
        type: SET_USERS,
        newUsers
    }
}