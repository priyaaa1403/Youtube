import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosArrowDropdown } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsPersonVideo } from "react-icons/bs";
import { VscHistory } from "react-icons/vsc";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { RiShoppingBag4Line } from "react-icons/ri";
import { HiOutlineSignal } from "react-icons/hi2";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";


const SideBar = () => {
   const panelState =  useSelector((store) => store.app.panelState)
  
    return panelState && (
        <div className='fixed h-screen overflow-y-hidden hover:overflow-y-auto w-52  ml-6 pt-1 font-normal pb-24 '>
            <h1 className="mb-5 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer flex items-center"><GoHomeFill className="mr-3 text-xl" /><Link to ="/">Home</Link></h1>
            <h1 className="mb-5 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer flex items-center"><SiYoutubeshorts className="mr-3 text-lg" />Shorts</h1>
            <h1 className="mb-5 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer flex items-center"><MdOutlineSubscriptions className="mr-3 text-xl" />Subscriptions</h1>
         <hr></hr>
         
            <h1 className="mt-6 mb-2 text-lg font-bold">You</h1>
            <ul>
                <li className="mb-4 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center"><BsPersonVideo className="mr-3 text-xl" />Your Channel</li>
                <li className="mb-4 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center"><VscHistory className="mr-3 text-xl" />History</li>
                <li className="mb-4 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center"><BiLike className="mr-3 text-xl" />Liked Videos</li>
                <li className="mb-4 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center">< MdOutlinePlaylistPlay className="mr-3 text-xl" />Playlist</li>
                <li className="mb-4 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center"><GoVideo  className="mr-3 text-xl" />Your Videos</li>
                <li className="mb-4 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center"><MdOutlineWatchLater className="mr-3 text-xl" />Watch Later</li>

            </ul>
            <hr></hr>
            <h1 className="mb-3 mt-6 text-lg font-bold">
                Explore
            </h1>
            <ul>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer flex items-center"><BsFire className="mr-3 text-xl" />Trending </li>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer flex items-center"><RiShoppingBag4Line className="mr-3 text-xl" />Shopping</li>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer flex items-center"><HiOutlineSignal className="mr-3 text-xl" />Live</li>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer flex items-center"><MdOutlinePodcasts className="mr-3 text-xl" />Podcasts</li>


            </ul>
            <hr/>

            <h1 className=" mt-6 mb-2 text-lg font-bold">Subscriptions</h1>
            <ul>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer">Akshay Saini</li>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer">Dhruv Rathee</li>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer">Naveen Rawat</li>
                <li className='flex mb-2 items-center hover:bg-gray-200 rounded-lg hover:cursor-pointer'> <IoIosArrowDropdown className='mr-1' /> Show More </li>
            </ul>
            <hr></hr>

            <h1 className="mb-2 mt-6 text-lg font-bold">More from Youtube</h1>
            <ul>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center"><FaYoutube className="mr-3 text-red-500 text-xl" />Youtube Premium</li>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center"><SiYoutubemusic className="mr-3 text-xl text-red-500" />Youtube Music</li>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center"><SiYoutubekids className="mr-3 text-xl text-red-500" />Youtube kids</li>
                <li className="mb-2 p-1 hover:bg-gray-200 rounded-lg hover:cursor-pointer  flex items-center">< SiYoutubestudio className="mr-3 text-xl text-red-500" />Youtube studio</li>

            </ul>

        </div>
    )
}

export default SideBar