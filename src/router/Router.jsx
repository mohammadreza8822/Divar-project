import { Routes, Route, Navigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import HomePage from "pages/HomePage.jsx";
import DashboardPage from "pages/DashboardPage";
import AuthPage from "pages/AuthPage.jsx";
import AdminPage from "pages/AdminPage.jsx";
import PageNotFound from "pages/404.jsx";
import { getProfile } from "../services/user";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.roll === "Admin" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
