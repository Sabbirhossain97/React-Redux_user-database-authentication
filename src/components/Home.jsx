import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Users from "./pages/Users"
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SignIn/>}> </Route>
        <Route path="/signup" exact element={<SignUp/>}></Route>
        <Route path="/users" exact element={<Users/>}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}
