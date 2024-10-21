import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";

const Main = () => {
 const panelState =  useSelector((store)=> store.app.panelState);
 const mainCss = !panelState ? "ml-32" : " ml-64"
  return (
    <div className={mainCss} >
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default Main;