import axios from "axios";


type firstSubResponseType = {
    data: {
        subFriends: {
            authUserId: string,
            subscribedFriendsId: Array<string>
        }
    }
    status: string
}

type getSubFriendsResponseType = {
    data: {
        result: [{
            authUserId: string
            subscribedFriendsId: Array<string>
            _id:string

        }]
    }
    result: number,
    status: string
}
type newSubResponseType = {
    data: {
        data: {
            authUserId: string,
            subscribedFriendsId: Array<string> | []
            _id:string
        }
    },
    status: string
}
export const subFriends = {
    firstSubscribe(authUserId: string, subscribedFriendsId: string) {

        return axios.post<firstSubResponseType>('http://localhost:3001/subFriends', {
            authUserId,
            subscribedFriendsId
        })
    }
    ,
    getSubscribedFriends(authUserId: string) {
        return axios.get<getSubFriendsResponseType>(`http://localhost:3001/subFriends/${authUserId}`)
    },
    addNewSubscribe(authUserId: string, subscribedFriendsId: string) {
        return axios.patch<newSubResponseType>(`http://localhost:3001/subFriends/${authUserId}`, {
            subscribedFriendsId
        })
    }
}