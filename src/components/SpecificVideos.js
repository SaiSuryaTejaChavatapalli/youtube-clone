import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import SpecificVideoFromSuggestion from "./SpecificVideoFromSuggestion";
import { useSearchParams } from "react-router-dom";
import { indMock } from "../utils/constants";
import SpecificVideoShimmer from "./SpecificVideoShimmer";
import { useDispatch } from "react-redux";
import { mainSideBarOpen } from "../utils/redux/appSlice";
// const suggestion = "code evolution";
const SpecificVideos = () => {
  // let [suggestion, setSuggestion] = useState("");
  const [specificSuggestionVideos, setSpecificSuggestionVideos] = useState([
    // ...indMock,
  ]);
  const [suggestionSearch] = useSearchParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const s = suggestionSearch.get("search_query");
  //   console.log(s);
  //   setSuggestion(s);
  // }, [suggestionSearch]);
  useEffect(() => {
    dispatch(mainSideBarOpen());
  }, []);
  useEffect(() => {
    const suggestion = suggestionSearch.get("search_query");
    fetch(
      `https://corsproxy.io/?https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${suggestion}&type=video&key=${YOUTUBE_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSpecificSuggestionVideos(data.items);
        // setSpecificSuggestionVideos(indMock);
      })
      .catch((err) => {
        console.log(err);
        console.log("error occured");
      });
  }, [suggestionSearch]);

  return specificSuggestionVideos?.length === 0 ? (
    <SpecificVideoShimmer />
  ) : (
    <div className="ml-20">
      {specificSuggestionVideos?.map((specificSuggestionVideo) => (
        <SpecificVideoFromSuggestion
          specVideo={specificSuggestionVideo}
          key={specificSuggestionVideo?.id?.videoId}
        />
      ))}
    </div>
  );
};

export default SpecificVideos;
