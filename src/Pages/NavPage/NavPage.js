import React from 'react';
import style from './NavPage.module.scss'
import {NavLink} from "react-router-dom";

const NavPage = () => {
   return (
      <div className={style.container}>

            <NavLink to={'profile'}>Profile</NavLink>
            <NavLink to={'/friends'}>Friends</NavLink>
            <NavLink to={'/messages'}>Messages</NavLink>
            <NavLink to={'/settings'}>Settings</NavLink>

      </div>
   );
};

export default NavPage;