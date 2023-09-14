import React from 'react';


const Network = (props : any) => {
    const {editMode,callback,placeholder,value,title,icon} = props
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