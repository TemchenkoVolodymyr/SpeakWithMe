import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './Header.module.scss'
import {RiLogoutBoxRLine} from "react-icons/ri";
import {logoutAC} from "../../Redux/isAuth/isAuthReducer";
import {AiOutlineSearch} from "react-icons/ai";
import defaultAvatar from '../../assets/Avatar/default.png'

const Header = () => {
   const isAuth = useSelector((state) => state.isAuth)
   const authUserData = useSelector((state) => state.authUser)
   const dispatch = useDispatch()

   const logout = () => {
      dispatch(logoutAC())
   }

   return (
      <div className={style.container}>
         <div className={style.logoSearch}>
            <div className={style.wrapperLogo}>
               <p>Speak With Me </p>
            </div>
            <div className={style.wrapperSearch}>
               <input type={"search"} placeholder={'Search for name '}/>
               <AiOutlineSearch className={style.searchIcon}></AiOutlineSearch>
            </div>
         </div>
         <div className={style.logWrapper}>
            <img src={authUserData.photo || defaultAvatar} alt={'avatar'}/>
            <p>{authUserData.name.toUpperCase()}</p>
            <RiLogoutBoxRLine onClick={logout}/>
         </div>
      </div>
   );
};

export default Header;