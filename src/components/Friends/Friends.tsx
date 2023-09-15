import React, {useEffect} from 'react';
import style from './Friends.module.scss'
import {subFriends} from "../../ApiRequests/SubFriends/SubFriends";
import {subscribesAC, subscribesActionType} from "../../Redux/Subscribes/subscribesAC";
import {friendsThunkCreator} from "./FriendsRedux/friendsThunkCreator";
import Friend from "./Friend/Friend";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {Action} from "redux";

const Friends = () => {

    const users = useAppSelector((state) => state.users)
    const authUserData = useAppSelector((state) => state.authUser)
    const dispatch = useAppDispatch()

    const filterUsers = users?.filter(user => user?._id !== authUserData._id)
    const subscribers = useAppSelector((state) => state.subscribers)

    type subscribesType = [{
        _id: string,
        authUserId: string,
        subscribedFriendsId:Array<string>
    }]
    const subscribe = (idUser: string) => {

        dispatch<any>(friendsThunkCreator(authUserData, idUser))
    }

    useEffect(() => {
        subFriends.getSubscribedFriends(authUserData._id)
            .then(res => {
                const data: subscribesType = res.data.data.result
                dispatch<subscribesActionType>(subscribesAC(data))
            })
    }, [authUserData])

    return (
        <div className={style.container}>
            {filterUsers && filterUsers.map(user => <Friend user={user}
                                                            subscribers={subscribers}
                                                            subscribe={subscribe}></Friend>)}

        </div>
    );
};

export default Friends;