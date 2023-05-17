import React from "react";
import { Link } from "react-router-dom";
const SpecificVideoFromSuggestion = ({ specVideo }) => {
  const { snippet, id } = specVideo;
  const { title, channelTitle, thumbnails, description, publishedAt } = snippet;
  const thumbnailImgUrl = thumbnails?.high?.url;
  const date = new Date(publishedAt);
  return (
    <Link to={`/watch?v=${id?.videoId}`}>
      <div className="flex m-4 h-200">
        <div>
          <img className="rounded-lg h-52" src={thumbnailImgUrl} alt="" />
        </div>
        <div className="mx-4">
          <h1 className="font-medium">{title}</h1>
          <p className="text-gray-600">
            528K views ..@
            {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
          </p>
          <p className="text-gray-600 text-sm text-xl my-4">{channelTitle}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SpecificVideoFromSuggestion;
