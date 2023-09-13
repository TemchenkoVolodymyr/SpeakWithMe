import {initialState} from "../initialState.tsx";

export const SET_SUBSCRIBES = "SET_SUBSCRIBES"
export const subscribesReducer = (subscribes = initialState.subscribes, action) => {
   switch (action.type) {
      case SET_SUBSCRIBES : {
         return action.data

      }

      default: return subscribes
   }
}