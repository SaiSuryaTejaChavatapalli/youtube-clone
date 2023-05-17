import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import profileImg from "../utils/images/sst.jpeg";
import { cacheResults } from "../utils/redux/searchSlice";
import ButtonList from "./ButtonList";
const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedData = useSelector((store) => store.search);

  useEffect(() => {
    //Debouncing the search
    const timer = setTimeout(() => {
      if (cachedData[searchQuery]) {
        setSuggestions(cachedData[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const handleSuggestionSearch = (suggestion) => {
    console.log("Li clicked");

    navigate(`results?search_query=${suggestion}`);
  };
  return (
    <>
      <div className="grid grid-flow-col p-2 m-2 w-full">
        <div className="flex col-span-1">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Ks9HQlPD-Rpraa6krZtrX2yleg-hXwfQ&usqp=CAU"
            alt="hamburger-menu"
          />
          <a href="/">
            <img
              className="h-6 ml-4 py-0 mt-1"
              src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png"
              alt="youtube-logo"
            />
          </a>
        </div>
        <div className="col-span-10">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-400 rounded-l-full w-1/2"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                setTimeout(() => setShowSuggestions(false), 300);
              }}
            />
            <button
              className="p-2 border border-gray-400 rounded-r-full bg-gray-100"
              onClick={() => navigate(`results?search_query=${searchQuery}`)}
            >
              &#128269;
            </button>
          </div>
          {showSuggestions && (
            <div
              className="fixed bg-white w-[28rem] shadow-lg rounded-lg  border border-gray-100 py-2 px-2"
              onMouseOver={() => setShowSuggestions(true)}
            >
              <ul>
                {suggestions.map((suggestion) => (
                  // <Link
                  //   to={`results?search_query=${suggestion}`}
                  //   key={suggestion}
                  // >
                  //   <li
                  //     className="shadow-sm py-2 px-3 hover:bg-gray-100"
                  //     key={suggestion}
                  //     // onClick={(e) => handleSuggestionSearch(suggestion, e)}
                  //   >
                  //     &#128269; {suggestion}
                  //   </li>
                  // </Link>
                  <li
                    className="shadow-sm py-2 px-3 hover:bg-gray-100 cursor-pointer"
                    key={suggestion}
                    onClick={(e) => {
                      handleSuggestionSearch(suggestion, e);
                      console.log("Link clicked");
                    }}
                  >
                    &#128269; {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-1">
          <img
            src={profileImg}
            alt="profile-icon"
            className="h-8 rounded-full"
          />
        </div>
      </div>
      <div className="ml-36 pl-4">
        <ButtonList />
      </div>
    </>
  );
};

export default Head;
