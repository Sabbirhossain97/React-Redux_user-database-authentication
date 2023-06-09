import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  userDetails: [
    {
      id: null,
      token: "",
    },
  ],
  loggedInUser: [
    {
      id: null,
      token: "",
    },
  ],
  isRegistered: false,
  isAuthenticated: false,
  loading: false,
  message: "",

};

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

export const logOut = createAction("RESET_ALL");
export const changeRoute = createAction("REFRESH_MESSAGE")
const authReducer = createSlice({
  name: "authuser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logOut, () => initialState);
    builder.addCase(changeRoute, (state)=> {
      state.message=""
    } );
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;

      if (payload.hasOwnProperty("error")) {
        state.message = payload.error;
      } else {
        if (state.userDetails.some((item) => item.id === payload.id)) {
          state.isRegistered = false;
          state.message = "User Already Registered !";
          return;
        } else {
          state.userDetails = [
            ...state.userDetails,
            {
              id: payload.id,
              token: payload.token,
            },
          ];

          state.message = "User Registered Successfully!";
          state.isRegistered = true;
        }
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
        state.message = payload.error;
        state.isAuthenticated = false;
      } else {
        if (state.userDetails.some((item) => item.token === payload.token)) {
          state.message = "Successfully Logged In!";
          state.isAuthenticated = true;
          state.loggedInUser = [
            {
              id: state.userDetails.find((item) => item.token === payload.token)
                .id,
              token: payload.token,
            },
          ];
        } else {
          state.message = "User not found! please sign up!";
          state.isAuthenticated = false;
        }
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
