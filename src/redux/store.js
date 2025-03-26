import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
