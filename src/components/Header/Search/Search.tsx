import * as React from 'react';
import style from "../Header.module.scss";
import {AiOutlineSearch} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../../assets/Avatar/default.png";
import {propsSearchType} from "./SearchTypes";

const Search = (props:  propsSearchType ) => {

   const {setSearch ,search,foundUsers} = props

   return (
      <>
      <div className={style.containerSearch}>
         <div className={style.wrapperSearch}>
            <input onChange={(e) => setSearch(e.target.value)} type={"search"} placeholder={'Search for name '} value ={search!}/>
            <AiOutlineSearch className={style.searchIcon}></AiOutlineSearch>
         </div>
         <div className={foundUsers && foundUsers?.length >= 1 ?  style.containerPopup : style.hiddePopup}>
            {foundUsers?.map(user => <NavLink onClick={() => setSearch("")} to={`/profile/${user?._id}`}><div className={style.wrapperSearchUser}>
                  <img src={user?.photo || defaultAvatar} alt={'avatar'}/>
                  <p>{user?.name}</p>
               </div> </NavLink>
            )}
         </div>
      </div>
      </>
   );
};

export default Search;