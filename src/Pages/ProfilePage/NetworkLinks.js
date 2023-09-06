import React from 'react';
import {ImTelegram} from "@react-icons/all-files/im/ImTelegram";
import {FiInstagram} from "@react-icons/all-files/fi/FiInstagram";
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle";
import {SiYoutube} from "@react-icons/all-files/si/SiYoutube";
import {GiCometSpark} from "@react-icons/all-files/gi/GiCometSpark";
import {useDispatch} from "react-redux";
import {
   changeInstagramAC, changePortfolioAC,
   changeTelegramAC,
   changeTwitterAC,
   changeYouTubeAC
} from "../../Redux/Authorization/authorizationAC";

const NetworkLinks = ({editMode, userData}) => {
   const dispatch = useDispatch()

   const changeTelegram = (e) => {
      dispatch(changeTelegramAC(e.target.value))
   }
   const changeInstagram = (e) => {
      dispatch(changeInstagramAC(e.target.value))
   }
   const changeYouTube = (e) => {
      dispatch(changeYouTubeAC(e.target.value))
   }
   const changeTwitter = (e) => {
      dispatch(changeTwitterAC(e.target.value))
   }
   const changePortfolio = (e) => {
      dispatch(changePortfolioAC(e.target.value))
   }

   return (
      <>

            {editMode ? <input value={userData.socialNetwork?.telegram} onChange={changeTelegram} placeholder={'telegram'}/> :
               <a href={userData.socialNetwork?.telegram} target="_blank" rel="noopener noreferrer"><ImTelegram color={'blue'}></ImTelegram>Telegram</a> }
            {editMode ? <input value={userData.socialNetwork?.instagram} onChange={changeInstagram} placeholder={'instagram'}/> :
               <a href={userData.socialNetwork?.instagram} target="_blank" rel="noopener noreferrer"><FiInstagram color={'purple'}></FiInstagram>Instagram</a>}
            {editMode ? <input value={userData.socialNetwork?.twitter} onChange={changeTwitter} placeholder={'twitter'}/> :
               <a href={userData.socialNetwork?.twitter} target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle color={'blue'}></AiFillTwitterCircle>Twitter</a>}
            {editMode ? <input value={userData.socialNetwork?.youtube} onChange={changeYouTube} placeholder={'youtube'}/> :
               <a href={userData.socialNetwork?.youtube} target="_blank" rel="noopener noreferrer"><SiYoutube color={"red"}></SiYoutube>YouTube</a>}

            {editMode ? <input value={userData.socialNetwork?.portfolio} onChange={changePortfolio} placeholder={'portfolio'}/> :
               <a href={userData.socialNetwork?.portfolio} target="_blank" rel="noopener noreferrer"><GiCometSpark color={"orange"}></GiCometSpark>Portfolio</a>}

      </>
   );
};

export default NetworkLinks;