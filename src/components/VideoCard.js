import React from "react";
import { timeAgo } from "../utils/configs/timeAgo";
const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;
  const { viewCount } = statistics;
  const date = new Date(publishedAt);
  const viewsInMillions = (viewCount / 1000000).toFixed(1);
  return (
    <div className="shadow-md p-2 m-2 w-72 h-[284px] rounded-md">
      <img
        alt="thumbnail"
        src={thumbnails?.medium?.url}
        className="rounded-lg w-full"
      />
      <div className="max-h-16 overflow-hidden">
        <h1 className="font-bold my-2 text-base leading-normal text-gray-700 line-clamp-2">
          {title}
        </h1>
      </div>

      <h2 className="break-words text-gray-600 ">{channelTitle}</h2>
      <h3 className="text-gray-600">
        {viewsInMillions}M views • {timeAgo(date)}
        {/* {` ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`} */}
      </h3>
    </div>
  );
};

export default VideoCard;
