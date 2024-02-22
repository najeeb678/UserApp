

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserData = createAsyncThunk(
  "userDetail/postUserData",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://6924-116-58-9-130.ngrok-free.app/auth/signup",
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
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://6924-116-58-9-130.ngrok-free.app/auth/signin",
        loginData
      );
      localStorage.setItem("token", response.data.token);

      return response;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized - password doesn't match
        return rejectWithValue("Password doesn't match");
      }
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
    //isAuthenticated: false,
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
        //state.isAuthenticated = true;
      })
      .addCase(postLoginData.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        if (action.payload === "Password doesn't match") {
          state.error = "Password doesn't match";
        } else {
          state.error = action.error.message;
        }
      });
  },
});
export const { setAuthenticated } = userDetailSlice.actions;
export default userDetailSlice.reducer;
