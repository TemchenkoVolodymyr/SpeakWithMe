import {initialState} from "../initialState";

export const SET_SUBSCRIBES = "SET_SUBSCRIBES"
export const subscribesReducer = (subscribes = initialState.subscribes, action) => {
   switch (action.type) {
      case SET_SUBSCRIBES : {
         return action.data

      }

      default: return subscribes
   }
}