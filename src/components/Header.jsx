import { RxHamburgerMenu } from "react-icons/rx";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { YT_LOGO } from "../utils/constant";
import { BsSearch } from "react-icons/bs";
import { IoMdMic } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changePanelState } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YT_SUGGESTION_API } from "../utils/constant";
import { cacheQuerySuggestion } from "../utils/searchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggDiv, setShowSuggDiv] = useState(false);

   const searchCache =  useSelector((store) => store.search);
   
    const getSuggestions = async () => {
        const data = await fetch(YT_SUGGESTION_API + searchQuery);
        const json = await data.json();
        // console.log(searchQuery,json[1]);
        setSuggestions(json[1]);
        dispatch(cacheQuerySuggestion(
            {
                [searchQuery]:json[1],
            }
        ))

    }
    // console.log(searchQuery);

    const handleSideBar = () => {
        dispatch(changePanelState());
    }
    useEffect(() => {
        const timer = setTimeout(() =>{ 
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                getSuggestions();
            }
        }, 200)
        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery])


    return (
        <div className="flex items-center justify-between sticky top-0 bg-white z-50  h-20 px-4">

            <div className="flex items-center">
                <RxHamburgerMenu
                    className="hover:cursor-pointer text-3xl"
                    onClick={handleSideBar}
                />
                <img src={YT_LOGO} className="ml-2 h-20" alt="YT_LOGO" />
            </div>

            <div className="flex items-center flex-grow justify-center">
                <div className="w-7/12" > 
                    <div className="flex w-full">
                        <input
                            type="text"
                            className="flex-grow border border-gray-400 rounded-l-full px-3 py-2"
                            placeholder="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={()=>setShowSuggDiv(true)}
                            onBlur={()=>setShowSuggDiv(false)}
                        />
                        <button className="pl-3 pr-6 border border-gray-400 bg-gray-100 hover:cursor-pointer hover:bg-slate-400 rounded-r-full">
                            <BsSearch />
                        </button>
                    </div>
                   {showSuggDiv && (
                     <div className="w-5/12 absolute top-16  bg-white rounded-lg shadow-xl ">
                     <ul >
                         {
                             suggestions.map((s)=><li key={s} className="w-full hover:bg-gray-300 px-2 py-1 flex items-center  font-semibold"> <RxCounterClockwiseClock className="mr-2" />{s}</li>)
                         }
                     </ul>
                     </div>
                   )}
                </div>


                <div className="ml-3 hover:cursor-pointer hover:bg-gray-200 text-2xl h-10 w-10 px-2 py-2 bg-gray-100 rounded-full">
                    <IoMdMic />
                </div>

            </div>

            <div className="flex items-center text-xl space-x-6">
                <BiVideoPlus className="hover: cursor-pointer" />
                <GoBell className="hover: cursor-pointer" />
                <FaRegUser className="hover: cursor-pointer" />
            </div>
        </div>
    );
}

export default Header;
