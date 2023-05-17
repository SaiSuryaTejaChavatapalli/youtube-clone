import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    isMainSideBarOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    mainSideBarClose: (state) => {
      state.isMainSideBarOpen = false;
    },
    mainSideBarOpen: (state) => {
      state.isMainSideBarOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, mainSideBarClose, mainSideBarOpen } =
  appSlice.actions;
export default appSlice.reducer;
