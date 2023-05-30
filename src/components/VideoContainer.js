import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { mainSideBarOpen } from "../utils/redux/appSlice";
const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
    dispatch(mainSideBarOpen());
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data?.json();
    setVideos(json?.items);
  };

  return videos?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-around ml-24">
      {videos?.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
