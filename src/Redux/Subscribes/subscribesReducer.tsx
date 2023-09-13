import {initialState} from "../initialState.tsx";
import {subscribersType} from "../initialStateType";

export const SET_SUBSCRIBES = "SET_SUBSCRIBES"
export const subscribesReducer = (subscribes = initialState.subscribes, action) : subscribersType => {
   switch (action.type) {
      case SET_SUBSCRIBES : {
         return action.data

      }

      default: return subscribes
   }
}