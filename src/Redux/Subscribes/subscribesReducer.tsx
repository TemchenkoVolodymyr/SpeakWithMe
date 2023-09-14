import {initialState} from "../initialState";
import {subscribersType} from "../initialStateType";

export const SET_SUBSCRIBES = "SET_SUBSCRIBES"
export const subscribesReducer = (subscribes = initialState.subscribes, action : any) : subscribersType => {
   switch (action.type) {
      case SET_SUBSCRIBES : {
         return action.data

      }

      default: return subscribes
   }
}