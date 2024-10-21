import { useEffect } from "react";
import { collapsePanel } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoDescription from "./VideoDescription";
import usePopularVideos from "../hooks/usePopularVideos";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const dispatch = useDispatch();
    const popularVideos = useSelector((store) => store.app.popularVideos);

    usePopularVideos();
    useEffect(() => {
        dispatch(collapsePanel())

    }, [])

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))

    const panelState = useSelector((store) => store.app.panelState);
    const mainCss = !panelState ? "ml-32 mt-3 w-full " : " ml-64 mt-3 w-full "

    if (!popularVideos) {
        return null;
    }
    return (
        <div className={mainCss}>
            <div className="flex w-full">

                <div>
                    <iframe width="720" height="375" src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=dnsIBYeF4RvCUN72"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
                <div className="ml-1 w-full">
                    <LiveChat />

                </div>
            </div>
            <div className="w-8/12">
            <VideoDescription sq={searchParams} />
            </div>

            <div className="w-8/12">
                <CommentsContainer />
            </div>
        </div>
    )
}
export default WatchPage;