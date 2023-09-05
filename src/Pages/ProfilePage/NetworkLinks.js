import React from 'react';
import {ImTelegram} from "@react-icons/all-files/im/ImTelegram";
import {FiInstagram} from "@react-icons/all-files/fi/FiInstagram";
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle";
import {SiYoutube} from "@react-icons/all-files/si/SiYoutube";
import {GiCometSpark} from "@react-icons/all-files/gi/GiCometSpark";

const NetworkLinks = ({editMode, userData}) => {
   return (
      <>
         <ul>
            {editMode ? <input value={userData.socialNetwork?.telegram}/> :
               <li><ImTelegram color={'blue'}></ImTelegram>Telegram</li>}
            {editMode ? <input value={userData.socialNetwork?.instagram}/> :
               <li><FiInstagram color={'purple'}></FiInstagram>Instagram</li>}
            {editMode ? <input value={userData.socialNetwork?.twitter}/> :
               <li><AiFillTwitterCircle color={'blue'}></AiFillTwitterCircle>Twitter</li>}
            {editMode ? <input value={userData.socialNetwork?.youtube}/> :
               <li><SiYoutube color={"red"}></SiYoutube>YouTube</li>}
            {editMode ? <input value={userData.socialNetwork?.portfolio}/> :
               <li><GiCometSpark color={"orange"}></GiCometSpark>Portfolio</li>}
         </ul>
      </>
   );
};

export default NetworkLinks;