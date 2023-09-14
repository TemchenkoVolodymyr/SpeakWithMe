import {RootDispatch, RootState} from "../configStore";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export const useAppDispatch : () => RootDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector