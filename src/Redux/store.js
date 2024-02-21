import { configureStore } from "@reduxjs/toolkit";
import userDetailsFunction from "./Slices/userDetails";
const store = configureStore({
  reducer: {
    app: userDetailsFunction,
  },
});
export default store;
