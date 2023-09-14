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
} from "../../../Redux/Authorization/authorizationAC";
import style from './NetworkLinks.module.scss'
import Network from "./Network";

const NetworkLinks = (props : any) => {
   const {editMode, userData} = props

   const dispatch = useDispatch()

   const changeTelegram = (e:any) => {
      dispatch(changeTelegramAC(e.target.value))
   }
   const changeInstagram = (e : any) => {
      dispatch(changeInstagramAC(e.target.value))
   }
   const changeYouTube = (e : any) => {
      dispatch(changeYouTubeAC(e.target.value))
   }
   const changeTwitter = (e : any) => {
      dispatch(changeTwitterAC(e.target.value))
   }
   const changePortfolio = (e : any) => {
      dispatch(changePortfolioAC(e.target.value))
   }

   return (

      <div className={style.container}>
         <Network placeholder={'telegram'} title={'telegram'} value={userData?.socialNetwork?.telegram} editMode={editMode} callback={changeTelegram} icon={<ImTelegram
            color={'blue'}></ImTelegram>}></Network>
         <Network placeholder={'instagram'} title={'instagram'} value={userData?.socialNetwork?.instagram} editMode={editMode} callback={changeInstagram} icon={<FiInstagram
            color={'purple'}></FiInstagram>}></Network>
         <Network placeholder={'twitter'} title={'twitter'} value={userData?.socialNetwork?.twitter} editMode={editMode} callback={changeTwitter} icon={<AiFillTwitterCircle
            color={'blue'}></AiFillTwitterCircle>}></Network>
         <Network placeholder={'youtube'} title={'youtube'} value={userData?.socialNetwork?.youtube} editMode={editMode} callback={changeYouTube} icon={<SiYoutube
            color={'red'}></SiYoutube>}></Network>
         <Network placeholder={'portfolio'} title={'portfolio'} value={userData?.socialNetwork?.portfolio} editMode={editMode} callback={changePortfolio} icon={<GiCometSpark
            color={'orange'}></GiCometSpark>}></Network>
      </div>

   );
};

export default NetworkLinks;