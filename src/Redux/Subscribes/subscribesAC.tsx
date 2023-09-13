import {SET_SUBSCRIBES} from "./subscribesReducer.tsx";
import {subscribersType} from "../initialStateType";

type subscribesActionType = {
    type: typeof SET_SUBSCRIBES,
    data: subscribersType
}
export const subscribesAC = (data: subscribersType): subscribesActionType => {
    return {
        type: SET_SUBSCRIBES,
        data
    }
}