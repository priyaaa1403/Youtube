import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";


const LiveChat = () =>{

    const [index,setIndex] = useState(0);
    const [data,setData] = useState([]);
    const [userInput , setUserInput] = useState("");
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.messages)  //this component is subscribing to the store
    const getLiveData = async () =>{
        //API CALLING
        const response = await fetch("https://66ddc31bf7bcc0bbdcdef076.mockapi.io/message");
        const json = await response.json();
        setData(json);

    }

    useEffect(()=>{
     //API CALL
     getLiveData()
     

    },[])
     
    useEffect(()=>{
            //Here API POLLING are done
            if(data.length>0){
          const interval =  setInterval(()=>{
            if(index < data.length){
                dispatch(addMessage(data[index]));
                setIndex(index+1);               
            }
            else{
                clearInterval(interval);

            }
                  
            },1500)

            //cleanup function
            return () => clearInterval(interval)
            
    }
},[index,data])


   
    return (
        <div>
        <div className="w-full h-[375px] bg-slate-200 flex rounded-lg border flex-col-reverse border-black shadow-lg overflow-y-scroll">
        {
            messages.map((m,index)=> <ChatMessage key={index} name={m.name} msg ={m.text}/>)
        }
        </div>

        <form 
        className="border border-blue-900 w-full rounded-md shadow-lg flex"
        onSubmit={(e)=>{
            e.preventDefault(); //avoid page reloading
            dispatch(addMessage({
                name:"Priya Srivastava",
                text:userInput
            }))
            setUserInput("");
            
        }}
        >
            <input 
            type="text"
            value={userInput}
            placeholder="Enter your message"
            className="px-2 py-1 border rounded-md flex-grow"
            onChange={(e) =>setUserInput(e.target.value)}
            />
            <button type="submit" className="w-16 h-8 mt-[1px] mr-[1px] bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-md shadow-lg hover:cursor-pointer">Send</button>

            </form>    
     
        </div>
    ) 
}
export default LiveChat;
