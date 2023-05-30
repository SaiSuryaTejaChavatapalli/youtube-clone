import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/redux/appSlice";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // dispatch(mainSideBarClose());
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
