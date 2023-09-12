import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './Header.module.scss'
import {RiLogoutBoxRLine} from "react-icons/ri";
import {logoutAC} from "../../Redux/isAuth/isAuthReducer";
import {AiOutlineSearch} from "react-icons/ai";
import defaultAvatar from '../../assets/Avatar/default.png'
import {NavLink} from "react-router-dom";

const Header = () => {
   const isAuth = useSelector((state) => state.isAuth)
   const authUserData = useSelector((state) => state.authUser)
   const dispatch = useDispatch()
   const [search,setSearch] = useState("")
   const users = useSelector((state) => state.users)
   const [foundUsers,setFoundUsers] = useState([])
   const logout = () => {
      dispatch(logoutAC())
   }


   useEffect(() => {
      const found = []
      users?.map(user => {
         if(search && user?.name.includes(search)) {
           found.push(user)
         }
      });
      setFoundUsers(found)
   },[search])
console.log(foundUsers)
   return (
      <div className={style.container}>
         <div className={style.logoSearch}>
            <div className={style.wrapperLogo}>
               <NavLink to={'/'}>Speak With Me </NavLink>
            </div>
            <div className={style.containerSearch}>
               <div className={style.wrapperSearch}>
                  <input onChange={(e) => setSearch(e.target.value)} type={"search"} placeholder={'Search for name '} value={search}/>
                  <AiOutlineSearch className={style.searchIcon}></AiOutlineSearch>
               </div>
               <div className={foundUsers.length >= 1 ?  style.containerPopup : style.hiddePopup}>
                  {foundUsers.map(user => <NavLink onClick={() => setSearch("")} to={`/profile/${user._id}`}><div className={style.wrapperSearchUser}>
                     <img src={user.photo || defaultAvatar} alt={'avatar'}/>
                     <p>{user.name}</p>
                     </div> </NavLink>
                     )}
               </div>
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