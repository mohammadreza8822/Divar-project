import { Routes, Route } from "react-router-dom";

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
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
