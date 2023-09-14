

export type PostType = {
    authorId:string,
    authorName:string,
    date:string,
    post:string,
    recipientId:string,
    _id:string
} | null

export type subscribersType = {
    authUserId:string,
    subscribedFriendsId:Array<string>,
    _id:string
} | null

export type interlocutorType = {
    id:string,
    name:string,
    photo:string | null
}
export type dialogType = {
    date : string
    message:string
    sender:string
    _id:string
}
export type dialogItemsType = {
    dialogsItem:[{
        dialog:Array<dialogType>,
        interlocutor:interlocutorType,
        _id:string
    }],
    idUser:string,
    _id:string,

}
export type dialogsType = [{
    user:dialogItemsType,
    _id:string
}]

export type currentUserConversationType = {
    id:string,
    name:string,
    photo:string | null
} | null