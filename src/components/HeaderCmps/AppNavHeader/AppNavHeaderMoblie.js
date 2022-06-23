import {Link} from "react-router-dom";

export const AppNavHeaderMoblie = ({
  setVisibleClass,
  handleCloseMoblieMenu,
  handlePopupMouseDown
}) => {
  return (
    <nav
      className={`navbar navbar_type_moblie ${setVisibleClass}`}
      onMouseDown={handlePopupMouseDown}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="navbar__container">
        <div className="navbar__wrapper">
          <Link
            to="/ofir-dahan-07-04-2022?key=215854&cityName=Tel Aviv"
            className="navbar__link navbar__link_type_moblie link_modifier"
            onClick={handleCloseMoblieMenu}
          >
            Home
          </Link>
          <Link
            to="/ofir-dahan-07-04-2022/favorites"
            className="navbar__link navbar__link_type_moblie link_modifier"
            onClick={handleCloseMoblieMenu}
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};
