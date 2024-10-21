 import React from 'react';
 
 import { PiUserCircleLight } from "react-icons/pi"; 
 
 const Comment = ({data}) => {
    const {name,text} = data;
   return (
     <div className='flex mt-1 '>
        <PiUserCircleLight className='mt-1 mr-1 text-2xl'/>
        <div>
            <h1 className="font-semibold">{name}</h1>
            <p className="text-lg mb-1">{text}</p>
        </div>
     </div>
   )
 }
 
 export default Comment;