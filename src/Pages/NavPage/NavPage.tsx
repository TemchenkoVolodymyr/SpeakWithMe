import React, {useState} from 'react';
import style from './NavPage.module.scss'
import {NavLink} from "react-router-dom";

const NavPage = () => {
   const [activeItem,setActiveItem] = useState('profile')
   return (
      <div className={style.container}>

            <NavLink className={activeItem === 'profile' ? style.active : null } to={'profile'} onClick={() => setActiveItem('profile')}>Profile</NavLink>
            <NavLink className={activeItem === 'friends' ? style.active : null } to={'friends'} onClick={() => setActiveItem('friends')}>Friends</NavLink>
            <NavLink className={activeItem === 'messages' ? style.active : null } to={'messages'} onClick={() => setActiveItem('messages')}>Messages</NavLink>
            <NavLink className={activeItem === 'settings' ? style.active : null } to={'settings'} onClick={() => setActiveItem('settings')}>Settings</NavLink>

      </div>
   );
};

export default NavPage;