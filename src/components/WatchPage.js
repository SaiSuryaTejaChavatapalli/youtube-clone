import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, mainSideBarClose } from "../utils/redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import ReactPlayer from "react-player";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const videoId = params.get("v");
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(mainSideBarClose());
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col w-full ml-8">
      <div className="PX-5 flex w-full">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=" + videoId}
          width="800px"
          height="400px"
          controls={true}
          className="w-2/3"
        />

        <div className="w-1/3">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

{
  /* <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */
}
