import { timeLine } from "../utils/timeLine";
import { formatViewCount } from "../utils/formatViewCount";
import { LuDot } from "react-icons/lu";

const VideoCard = ({itemInfo}) =>{

    const {snippet, statistics} =itemInfo;

    const {channelTitle, title,thumbnails, publishedAt} = snippet;
    const { viewCount} = statistics;
    const timeAgo = timeLine(publishedAt);
    const views = formatViewCount(viewCount);


    return(
        <div className=" w-[360px] p-2 mb-3 mr-2">
           <img 
           className=" w-full object-cover rounded-lg"
           src={thumbnails.medium.url} 
            alt="thumbnail"
            />
           <p className=" font-medium mt-1 w-11/12 ">{title}</p>
           <h1 className="mt-1 text-gray-500">{channelTitle}</h1>
           <div className="flex text-gray-700 text-sm">
            
            <h1>{views} views</h1>
            <h1 className="flex items-center justify-center"><LuDot className=" text-2xl " />{timeAgo}</h1>        

           </div>
            
        </div>
    )
}
export default VideoCard;