import {initialState} from "../initialState";
import {subscribersType} from "../initialStateType";
import {subscribesActionType} from "./subscribesAC";

export const SET_SUBSCRIBES = "SET_SUBSCRIBES"

export type subscribersActionsType = subscribesActionType
export const subscribesReducer = (subscribes = initialState.subscribes, action : subscribersActionsType) : subscribersType => {
   switch (action.type) {
      case SET_SUBSCRIBES : {
         return action.data

      }

      default: return subscribes
   }
}