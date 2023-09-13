import {SET_USER} from "./userReducer.tsx";
import {foundUserType} from "../../../components/Header/Search/SearchTypes";

type userActionType = {
    type: typeof SET_USER,
    user: foundUserType
}
export const userAC = (user: foundUserType): userActionType => {
    return {
        type: SET_USER,
        user
    }
}