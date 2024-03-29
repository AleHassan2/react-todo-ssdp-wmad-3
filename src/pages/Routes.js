import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Auth from "./Auth";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import { useAuthContext } from "contexts/AuthContext";

export default function Index() {
  const { isAuth } = useAuthContext();
  // console.log(isAuth);
  return (
    <>
      <Routes>
        <Route
          path="/auth/*"
          element={!isAuth ? <Auth /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/*"
          element={!isAuth ? <Auth /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard/*"
          element={<PrivateRoute Component={Dashboard} />}
        />
      </Routes>
    </>
  );
}
