import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserData = createAsyncThunk(
  "userDetail/postUserData",
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

export const postLoginData = createAsyncThunk(
  "userDetails/postLoginData",
  async (loginData) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", loginData);
      
      return response;
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
      .addCase(postUserData.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(postUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users.push(action.payload);
      })
      .addCase(postUserData.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postLoginData.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(postLoginData.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        console.log("Fulfilled login: ", JSON.parse(JSON.stringify(state)));
      })
      .addCase(postLoginData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.error = action.error.message;
      });
  },
});

export default userDetailSlice.reducer;
