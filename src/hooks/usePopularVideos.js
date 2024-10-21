//customHook
import { useEffect} from "react";
import { YT_VIDEO_API } from '../utils/constant';
import { addPopularVideos } from "../utils/appSlice";
import { useDispatch } from "react-redux";


const usePopularVideos = ()=>{
 const dispatch = useDispatch();
    const getPopularVideos = async () =>{
       const data = await fetch(YT_VIDEO_API);
       const json = await data.json(); 
       console.log(json.items);
      dispatch(addPopularVideos(json.items));

    }  
    useEffect(()=>{
      getPopularVideos();
    },[])
} 
 export default usePopularVideos; 