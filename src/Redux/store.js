import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./Slices/userDetails";
const store = configureStore({
  reducer: {
    userDetails: userDetails,
  },
});
export default store;
