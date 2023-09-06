import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Friends = () => {

   const users = useSelector((state) => state.users)
   return (
      <div>
         {users && users.map(user => <div>
            <p>{user.name}</p>
         </div>)}
      </div>
   );
};

export default Friends;