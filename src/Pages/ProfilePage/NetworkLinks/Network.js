import React from 'react';


const Network = ({editMode,callback,placeholder,value,title,icon}) => {
   return (
    <>
       <div>
          {editMode ?
             <input value={value} onChange={callback} placeholder={placeholder}/> :
             <a href={value} target="_blank" rel="noopener noreferrer">{icon}{title}</a>}
       </div>
    </>
   );
};

export default Network;