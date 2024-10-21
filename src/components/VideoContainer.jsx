import { useSelector } from 'react-redux';
import usePopularVideos from '../hooks/usePopularVideos';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


import React from 'react'
 
  const VideoContainer = () => {
  const popularVideos = useSelector((store) =>store.app.popularVideos)
  usePopularVideos();
  //early return
  if(!popularVideos){
    return null;
  }
  
   return (
     <div className='mt-16 flex flex-wrap h-screen fixed overflow-y-auto scrollbar-hide '>
      {popularVideos.map((video)=><Link to = {"/watch?v="+video.id}  key={video.id}><VideoCard itemInfo ={video} /></Link>)}
     </div> 
   )
 }
 
 export default VideoContainer;