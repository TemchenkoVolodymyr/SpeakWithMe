import React from 'react';
import style from "../ProfileInfo.module.scss";


const AboutMeSection = ({editMod,icon,title,callback,placeholder,value,inputType,isLooking}) => {
   return (
      <div className={style.aboutMe}>
         <p className={style.title}>{icon} {title}</p>
         {isLooking ? isLooking : null}
         {editMod ? <input type={inputType} value={value} onChange={callback} placeholder={placeholder}/> :
            <p>{value}</p>}
      </div>
   );
};

export default AboutMeSection;