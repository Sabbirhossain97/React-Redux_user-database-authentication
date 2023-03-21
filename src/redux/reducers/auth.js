import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("users/signup", async (data) => {
  try {
    const response = await axios.post("https://reqres.in/api/register", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const loginUser = createAsyncThunk("users/login", async (data) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const authReducer = createSlice({
  name: "authuser",
  initialState: {
    data: [],
    isRegistered: false,
    isAuthenticated: false,
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (payload.hasOwnProperty("error")) {
        state.message = payload.error;
        state.isRegistered = false;
      } else if (payload.hasOwnProperty("token")) {
        state.data = payload;
        state.isRegistered = true;
      }
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.isRegistered = false;
      state.message = payload;
      console.log(payload);
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (payload.hasOwnProperty("error")) {
        alert(payload.error);
        state.message = payload.error;
        state.isAuthenticated = false;
      } else if (payload.hasOwnProperty("token")) {
        state.data = payload;
        state.isAuthenticated = true;
        alert("success!");
      }
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = payload;
      console.log(payload);
    });
  },
});

export default authReducer;
