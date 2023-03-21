import React from "react";
import { Route, redirect, Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

export default function PrivateRoute1() {
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
