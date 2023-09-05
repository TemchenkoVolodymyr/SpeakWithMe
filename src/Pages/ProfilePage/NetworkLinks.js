import React from 'react';
import {ImTelegram} from "@react-icons/all-files/im/ImTelegram";
import {FiInstagram} from "@react-icons/all-files/fi/FiInstagram";
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle";
import {SiYoutube} from "@react-icons/all-files/si/SiYoutube";
import {GiCometSpark} from "@react-icons/all-files/gi/GiCometSpark";

const NetworkLinks = () => {
   return (
     <>
        <ul>
           <li><ImTelegram color={'blue'}></ImTelegram>Telegram</li>
           <li><FiInstagram color={'purple'}></FiInstagram>Instagram</li>
           <li><AiFillTwitterCircle color={'blue'}></AiFillTwitterCircle>Twitter</li>
           <li><SiYoutube color={"red"}></SiYoutube>YouTube</li>
           <li><GiCometSpark color={"orange"}></GiCometSpark>Portfolio</li>
        </ul>
     </>
   );
};

export default NetworkLinks;