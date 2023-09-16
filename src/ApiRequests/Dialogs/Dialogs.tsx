import axios from "axios";
import {postType} from "../../Pages/ProfilePage/ProfilePosts/Post/Post";
import {dialogItemsType, dialogsType} from "../../Redux/initialStateType";
import {dialogStateType} from "../../Pages/DialogsPage/Dialog/Dialog";

type interlocutorType = {
    _id: string | null,
    name: string | null,
    photo: string | null
}

type createDialogResponseType = {
    status: string,
    result: number,
    data: { result: Array<postType> }
}

type GetDialogsCurrentUserResponseType = {
    status: string,
    data: {
        dialogs: Array<dialogsType>
    }
}

type AddedNewDialogResponseType = {
    messages: dialogsType
    status: string
}
type getDialogResponseType = {
    dialog: dialogStateType,
    status: string
}


export const DialogFunctions = {
    createDialog(authUserId: string, interlocutor: interlocutorType, message: string) {
        return axios.post<createDialogResponseType>(`http://localhost:3001/dialogs`, {
            idUser: authUserId,
            interlocutor: {
                id: interlocutor._id,
                name: interlocutor.name,
                photo: interlocutor.photo || null
            },
            sender: authUserId,
            message: message,
            date: new Date().toLocaleDateString()
        })
    },
    getDialogsCurrentAuthUser(idUser: string) {
        return axios.get<GetDialogsCurrentUserResponseType>(`http://localhost:3001/dialogs/${idUser}`)
    },

    addNewDialogs(idUser: string, interlocutor: interlocutorType, message: string) {
        return axios.patch(`http://localhost:3001/dialogs/${idUser}`, {
            idUser: idUser,
            interlocutor: {
                id: interlocutor._id,
                name: interlocutor.name,
                photo: interlocutor.photo || null
            },
            sender: idUser,
            message: message,
            date: new Date().toLocaleDateString()
        })
    },
    getDialog(userId: string, dialogId: string | undefined) {
        return axios.get<getDialogResponseType>(`http://localhost:3001/dialogs/${userId}/${dialogId}`)
    },
    addNewMessageIntoDialog(userId: string, dialogId: string | undefined, message: string) {
        return axios.patch<AddedNewDialogResponseType>(`http://localhost:3001/dialogs/${userId}/${dialogId}`, {
            sender: userId,
            message: message,
            date: new Date().toLocaleDateString()
        })
    }
}

