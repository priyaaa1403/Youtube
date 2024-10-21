import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { timeLine } from "../utils/timeLine";
import { formatViewCount } from "../utils/formatViewCount";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";


const VideoDescription = ({ sq }) => {
    const popularVideos = useSelector((store) => store.app.popularVideos);
    const [showDescript, setShowDescript] = useState(false);
    const v_id = sq.get("v");
    const [videoDetail, setVideoDetail] = useState(null);

    const extractVideoDetail = (v_id) => {
        return popularVideos.find((video) => video?.id === v_id);
    };

    useEffect(() => {
        setVideoDetail(extractVideoDetail(v_id));
    }, [v_id]);

    if (!videoDetail) {
        return null;
    }

    const { snippet, statistics } = videoDetail;
    const { channelTitle, title, publishedAt, description } = snippet;
    const { viewCount, likeCount } = statistics;
    const timeAgo = timeLine(publishedAt);
    const views = formatViewCount(viewCount);
    const likes = formatViewCount(likeCount);

    const handleDescript = () => {
        setShowDescript(!showDescript);
    };

    return (
        <div className="w-full">
            <div className="w-11/12 h-auto mt-3 mb-2">
                <h1 className="text-xl font-bold mb-1">{title}</h1>
                <div className="mt-4 mb-1 flex">
                    <div>
                    <BiSolidUserCircle className="text-5xl" />
                    </div>
                    <div>
                        <div className="mr-1 w-44">{channelTitle}</div>
                        <div className="font-light text-sm">2.4M subscribers</div>
                    </div>
                    <button className="bg-black  px-2 py-1 ml-11 rounded-3xl text-white mr-16 w-24 mt-1 h-8 font-semibold">Subscribe</button>
                    
                    <div className="flex mr-3 h-10">
                        <div className="bg-slate-200 rounded-l-xl px-1 pt-[4px] flex border border-r-gray-400">
                            <AiOutlineLike className="text-2xl" />{likes}
                        </div>
                        <div className="bg-slate-200  pl-1 pr-2 pt-[6px] rounded-r-xl">
                            <AiOutlineDislike className="text-2xl" />
                        </div>
                    </div>
                    <h1 className="flex bg-slate-200 px-2 h-10 mb-1 rounded-xl mr-2 items-center">
                        <PiShareFat className="mr-1 text-lg" />Share
                    </h1>
                    <div className="bg-gray-200  w-10 h-9  rounded-full">
                        <BsThreeDots className="mt-[8px] ml-[10px] text-lg" />
                    </div>
                </div>
            </div>
            <div className="mt-3 w-11/12 bg-gray-200 rounded-xl p-2">
                <div className="flex font-medium">
                    <h1 className="mr-1">{views} views,</h1>
                    <h1>{timeAgo}</h1>
                </div>
                <button
                    className="flex shadow-lg rounded-lg mt-2 bg-black p-1 text-white font-semibold"
                    onClick={handleDescript}
                >
                    {showDescript ? "Show less" : "Show more"}
                </button>
                {showDescript && (
                    <p className="mt-1 w-full whitespace-pre-wrap break-words">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default VideoDescription;
