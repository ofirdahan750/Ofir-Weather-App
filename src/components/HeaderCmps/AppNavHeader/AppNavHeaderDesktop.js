import {Link} from "react-router-dom";

export const AppNavHeaderDesktop = () => {
  return (
    <nav className="navbar navbar_type_desktop">
      <Link
        to="/ofir-dahan-07-04-2022?key=215854&cityName=Tel Aviv"
        className="navbar__link navbar__link_type_desktop link_modifier"
      >
        Home
      </Link>
      <Link
        to="/ofir-dahan-07-04-2022/favorites"
        className="navbar__link navbar__link_type_desktop link_modifier"
      >
        Favorites
      </Link>
    </nav>
  );
};
