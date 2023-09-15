import React, {useEffect, useState} from 'react';
import style from './Header.module.scss'
import {RiLogoutBoxRLine} from "react-icons/ri";
import {logoutAC} from "../../Redux/isAuth/isAuthReducer";
import defaultAvatar from '../../assets/Avatar/default.png'
import {NavLink} from "react-router-dom";
import Search from "./Search/Search";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";

const Header = () => {

   const authUserData = useAppSelector((state) => state.authUser)
   const dispatch = useAppDispatch()
   const [search, setSearch] = useState("")
   const users = useAppSelector((state) => state.users)
   const [foundUsers, setFoundUsers] = useState([])
   const logout = () => {
      dispatch(logoutAC())
   }

   useEffect(() => {
      const found : any = []
      users?.map(user => {
         if (search && user?.name.includes(search)) {
            found.push(user)
         }
      });
      setFoundUsers(found)
   }, [search,users])

   return (
      <div className={style.container}>
         <div className={style.logoSearch}>
            <div className={style.wrapperLogo}>
               <NavLink to={'/'}>Speak With Me</NavLink>
            </div>
            <Search  search={search} setSearch={setSearch} foundUsers={foundUsers}></Search>
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