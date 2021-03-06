import React from "react";
import {AppHeader} from "./components/HeaderCmps/AppHeader.js";
import {AppFooter} from "./components/FooterCmps/AppFooter.js";
import {HomePage} from "./pages/HomePage.js";
import {NotFoundPage} from "./pages/NotFoundPage.js";
import {FavoritesPage} from "./pages/FavoritesPage.js";
import {Routes, Route, Navigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <ToastContainer />
      <div className="page__content">
        <AppHeader />
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/Ofir-Weather-App" />} />
            <Route path="/Ofir-Weather-App" element={<HomePage />} />
            <Route
              path="/Ofir-Weather-App/favorites"
              element={<FavoritesPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </>
  );
};
