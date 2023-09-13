import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './Header.module.scss'
import {RiLogoutBoxRLine} from "react-icons/ri";
import {logoutAC} from "../../Redux/isAuth/isAuthReducer";
import defaultAvatar from '../../assets/Avatar/default.png'
import {NavLink} from "react-router-dom";
import Search from "./Search/Search.tsx";

const Header = () => {

   const authUserData = useSelector((state) => state.authUser)
   const dispatch = useDispatch()
   const [search, setSearch] = useState("")
   const users = useSelector((state) => state.users)
   const [foundUsers, setFoundUsers] = useState([])
   const logout = () => {
      dispatch(logoutAC())
   }

   useEffect(() => {
      const found = []
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