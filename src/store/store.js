import { configureStore } from "@reduxjs/toolkit";
import home from "./homeSlice";
export const store = configureStore({
  reducer: {
    home,
  },
})