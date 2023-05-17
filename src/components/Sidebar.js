import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import HistoryIcon from "@mui/icons-material/History";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SchoolIcon from "@mui/icons-material/School";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { toggleMenu } from "../utils/redux/appSlice";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  //Early return Pattern
  if (!isMenuOpen) return null;

  return (
    <div
      className={`p-5 shadow-lg w-48 fixed bg-white top-0  z-20 left-0 h-full`}
    >
      <ul>
        <li className="flex mb-6">
          <div
            onClick={() => dispatch(toggleMenu())}
            className="cursor-pointer"
          >
            <MenuOutlinedIcon />
          </div>
          <div>
            <a href="/">
              <img
                className="h-4 ml-4 py-0 mt-2"
                src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png"
                alt="youtube-logo"
              />
            </a>
          </div>
        </li>
        <li className="mb-1">
          <Link to="/">
            <HomeIcon className="mr-2" /> Home
          </Link>
        </li>
        <li className="mb-1">
          <GroupWorkIcon className="mr-2" />
          Shorts
        </li>
        <li className="mb-1">
          <SlideshowIcon className="mr-2" /> Videos
        </li>
        <li className="mb-1">
          <HistoryIcon className="mr-2" />
          History
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="mb-1">
          <MusicNoteIcon className="mr-2" />
          Music
        </li>
        <li className="mb-1">
          <SportsHandballIcon className="mr-2" />
          Sports
        </li>
        <li className="mb-1">
          <SportsEsportsIcon className="mr-2" />
          Gaming
        </li>
        <li className="mb-1">
          <MovieFilterIcon className="mr-2" />
          Movies
        </li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li className="mb-1">
          <TrendingUpIcon className="mr-2" />
          Trending
        </li>
        <li className="mb-1">
          <NewspaperIcon className="mr-2" />
          News
        </li>
        <li className="mb-1">
          <ShoppingBagIcon className="mr-2" />
          Shopping
        </li>
        <li className="mb-1">
          <SchoolIcon className="mr-2" />
          Learning
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
