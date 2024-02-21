import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUser = createAsyncThunk(
  "userDetail/postUser",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        userData
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    isAuthenticated: false,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
        console.log("Fulfilled: ", JSON.parse(JSON.stringify(state)));
      })
      .addCase(postUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userDetailSlice.reducer;
