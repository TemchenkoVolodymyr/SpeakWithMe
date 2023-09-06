import React from 'react';
import style from './NavPage.module.scss'
import {NavLink} from "react-router-dom";

const NavPage = () => {
   return (
      <div className={style.container}>
         <div>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/friends'}>Friends</NavLink>
         </div>
      </div>
   );
};

export default NavPage;