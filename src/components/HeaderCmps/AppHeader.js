import {AppNavHeaderDesktop} from "./AppNavHeader/AppNavHeaderDesktop.js";
import {AppNavHeaderMoblie} from "./AppNavHeader/AppNavHeaderMoblie.js";
import appLogo from "../../images/header/logo/header_logo.png";
import moblieMenu from "../../images/header/menu_moblie.svg";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const AppHeader = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const moblieBreakpoint = 560;
  const [isMoblieMenuOpen, setMoblieMenuOpen] = useState(false);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const handleCloseMoblieMenu = () => {
    setMoblieMenuOpen(false);
    document.removeEventListener("keydown", handleEscClose);
  };

  const handleOpenMoblieMenu = () => {
    setMoblieMenuOpen(true);
    document.addEventListener("keydown", handleEscClose);
  };
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      handleCloseMoblieMenu();
    }
  };
  const handlePopupMouseDown = (e) => {
    const contextMenu = 2;
    if (e.button === contextMenu) return;
    if (e.target.classList.contains("navbar_visible")) {
      handleCloseMoblieMenu();
    }
  };
  const setVisibleClass = () => {
    return isMoblieMenuOpen ? " navbar_visible" : "";
  };
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link
          to="/ofir-dahan-07-04-2022?key=215854&cityName=Tel Aviv"
          className="header__logo link_modifier"
        >
          <img
            alt="Herolo Weather App Logo"
            width={110}
            height={110}
            src={appLogo}
            className="header__logo"
          />
        </Link>
        {width > moblieBreakpoint ? (
          <AppNavHeaderDesktop />
        ) : (
          <>
            <button className="button_modifier" onClick={handleOpenMoblieMenu}>
              <img src={moblieMenu} alt="Open navbar menu" />
            </button>
            <AppNavHeaderMoblie
              setVisibleClass={setVisibleClass()}
              handleCloseMoblieMenu={handleCloseMoblieMenu}
              handlePopupMouseDown={handlePopupMouseDown}
            />
          </>
        )}
      </div>
    </header>
  );
};
