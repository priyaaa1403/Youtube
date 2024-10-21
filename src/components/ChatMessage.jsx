import React from 'react'
import { BiSolidUserCircle } from "react-icons/bi";


const ChatMessage = ({name,msg}) => {
    return (
        <div className='flex mt-1'>
            <div>
                <BiSolidUserCircle className="text-5xl" />
            </div>
            <div className='flex items-center'>
                <h1 className='ml-1 mr-3 font-bold'>{name}</h1>
                <h1>{msg}</h1>

            </div>
        </div>
    )
}

export default ChatMessage;