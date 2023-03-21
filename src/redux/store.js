import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";

 const store = configureStore({
   reducer: {
     user: authReducer.reducer,
   },
 });
export default store;