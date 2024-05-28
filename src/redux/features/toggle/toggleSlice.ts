import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToggleState {
  isSidebarOpen: boolean;
}

const initialState: ToggleState = {
  isSidebarOpen: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setSidebarOpen: (state) => {
      state.isSidebarOpen = true;
    },
    setSidebarClose: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { setSidebarClose, setSidebarOpen } = toggleSlice.actions;

export default toggleSlice.reducer;
