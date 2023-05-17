import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import { useSelector } from "react-redux";
const MainSidebar = () => {
  const isMainSideBarOpen = useSelector((store) => store.app.isMainSideBarOpen);
  if (isMainSideBarOpen === false) {
    return null;
  }
  return (
    <div className="fixed bg-white z-20 top-20 h-full">
      <ul>
        <li className="mb-8">
          <Link to="/" className="flex flex-col items-center">
            <HomeIcon className="mr-2" />
            <div className="text-xs">Home</div>
          </Link>
        </li>
        <li className="mb-8">
          <Link to="/" className="flex flex-col items-center">
            <GroupWorkOutlinedIcon className="mr-2" />
            <div className="text-xs">Shorts</div>
          </Link>
        </li>
        <li className="mb-8">
          <Link to="/" className="flex flex-col items-center">
            <SubscriptionsOutlinedIcon className="mr-2" />
            <div className="text-xs">Subscriptions</div>
          </Link>
        </li>
        <li className="mb-8">
          <Link to="/" className="flex flex-col items-center">
            <VideoLibraryOutlinedIcon className="mr-2" />
            <div className="text-xs">Library</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainSidebar;
