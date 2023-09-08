import {SET_SUBSCRIBES} from "./subscribesReducer";

export const subscribesAC = (data) => {
return{
   type:SET_SUBSCRIBES,
   data
}
}