import {SET_USERS} from "./usersReducer.tsx";
import {foundUserType} from "../../components/Header/Search/SearchTypes";

type usersActionType = {
    type: typeof SET_USERS,
    newUsers: Array<foundUserType>
}

export const usersAC = (newUsers: Array<foundUserType>): usersActionType => {
    return {
        type: SET_USERS,
        newUsers
    }
}