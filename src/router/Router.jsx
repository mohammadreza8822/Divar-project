import { Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage.jsx";
import DashboardPage from "pages/DashboardPage";
import AuthPage from "pages/AuthPage.jsx";
import AdminPage from "pages/AdminPage.jsx";
import PageNotFound from "pages/404.jsx";

function Router() {
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
