/** @format */

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "home",
  scroll: "top",
  isScroll: false,
};

// Define a slice using createSlice
const selectedSlice = createSlice({
  name: "selected", // Slice name
  initialState: initialState, // Initial state
  reducers: {
    // Define reducer functions to update the state
    setSelectedNav: (state, action) => {
      state.selected = action.payload;
      if (["home", "product-design"].includes(action.payload)) {
        state.scroll = action.payload;
        state.isScroll = !state.isScroll;
      }
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

// Export action creators
export const { setSelectedNav, setScroll } = selectedSlice.actions;

// Combine the slice reducer into a root reducer
const rootReducer = {
  selected: selectedSlice.reducer,
};

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
