import React, {useEffect, useState} from 'react';
import style from './Dialog.module.scss'
import {NavLink, useParams} from "react-router-dom";
import {DialogFunctions} from "../../../ApiRequests/Dialogs/Dialogs";
import defaultImage from '../../../assets/Avatar/default.png'
import {MdOutlineCancelScheduleSend, MdOutlineSendAndArchive} from "react-icons/md";
import Message from "./Message/Message";
import {useAppSelector} from "../../../Hooks/Hooks";
import {RootState} from "../../../configStore";
import {dialogType} from "../../../Redux/initialStateType";

type messageType = {
    _id:string,
    sender: string,
    message: string,
    date: string
}
type dialogStateType = {
    dialog: Array<messageType>,
    interlocutor:{
        id:string,
        name:string,
        photo:null | string
    },
    _id:string
}
const Dialog = () => {

    const {dialogId} = useParams()
    const authUserData = useAppSelector((state) => state.authUser)
    const [dialog, setDialog] = useState<dialogStateType | null>(null)
    const [message, setMessage] = useState("")
    const currentUserConversation = useAppSelector((state) => state.currentUserConversation)
console.log(dialog)
    useEffect(() => {
        DialogFunctions.getDialog(authUserData?._id, dialogId).then(res => setDialog(res.data.dialog)).catch(err => console.log(err))
    }, [dialogId, authUserData])


    const addNewMessage = (dialogId: string) => {
        if (message) {
            DialogFunctions.addNewMessageIntoDialog(authUserData?._id, dialogId, message).then(res => {
                if (res.status === 200) {
                    setMessage("")
                    DialogFunctions.getDialog(authUserData?._id, dialogId).then(res => setDialog(res.data.dialog)).catch(err => console.log(err))
                }
            })
        }

    }

    return (
        <div className={style.container}>
            <NavLink to={`/profile/${currentUserConversation?.id}`}>
                <div className={style.headerDialog}>
                    <img src={currentUserConversation?.photo || defaultImage} alt={'avatar'}/>
                    <p>{currentUserConversation?.name}</p>
                </div>
            </NavLink>
            <div className={style.wrapperDialogs}>
                {dialog && dialog.dialog.map(item => <Message authUserData={authUserData}
                                                              currentUserConversation={currentUserConversation}
                                                              item={item}></Message>)}
            </div>

            <div className={style.textareaWrapper}>
                <textarea placeholder={'type...'} value={message}
                          onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
        </div>
    );
};

export default Dialog;