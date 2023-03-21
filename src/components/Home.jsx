import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import PrivateRoute1 from "./pages/PrivateRoute1";
import PrivateRoute2 from "./pages/PrivateRoute1";
import NoPage from "./pages/NoPage";
import Dashboard from "./pages/Dashboard";
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SignIn />}></Route>
        <Route path="/signup" exact element={<SignUp />}></Route>
        <Route exact path="/users" element={<PrivateRoute1 />}>
          <Route path="/users" element={<Users />} />
        </Route>
        <Route exact path="/dashboard" element={<PrivateRoute2 />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
