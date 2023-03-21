import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "users/signup",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users?page=2");
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const authReducer = createSlice({
  name: "authuser",
  initialState: {
    data: [],
    isSuccess: false,
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
      state.data = payload;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = payload;
    });
  },
});

export default authReducer;
