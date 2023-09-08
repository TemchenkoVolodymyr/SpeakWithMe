import React, {useEffect} from 'react';
import {DialogFunctions} from "../../ApiRequests/Dialogs/Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {dialogsAC} from "../../Redux/Dialogs/dialogsAC";
import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {userAC} from "../../Redux/Users/User/userAC";

const DialogsPage = () => {
   const authUserData = useSelector((state) => state.authUser)
   const dispatch = useDispatch()
   const user = useSelector((state) => state.user)
   const dialogs = useSelector((state) => state.dialogs)
   useEffect(() => {

      DialogFunctions.getDialogsCurrentAuthUser(authUserData._id).then(res => dispatch(dialogsAC((res.data.data.dialogs))))
   }, [authUserData])

   console.log(dialogs)
   return (
      <div>
      </div>
   );
};

export default DialogsPage;