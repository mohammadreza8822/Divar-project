import { Routes, Route, Navigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import HomePage from "pages/HomePage.jsx";
import DashboardPage from "pages/DashboardPage";
import AuthPage from "pages/AuthPage.jsx";
import AdminPage from "pages/AdminPage.jsx";
import PageNotFound from "pages/404.jsx";
import { getProfile } from "../services/user";
import Loader from "../components/modules/Loader";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  console.log({ data, isLoading, error });

  if (isLoading) return <Loader />;

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
          data && data.data.role === "ADMIN" ? (
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
