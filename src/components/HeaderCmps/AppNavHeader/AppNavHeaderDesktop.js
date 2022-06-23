import {Link} from "react-router-dom";

export const AppNavHeaderDesktop = () => {
  return (
    <nav className="navbar navbar_type_desktop">
      <Link
        to="/Ofir-Weather-App?key=215854&cityName=Tel Aviv"
        className="navbar__link navbar__link_type_desktop link_modifier"
      >
        Home
      </Link>
      <Link
        to="/Ofir-Weather-App/favorites"
        className="navbar__link navbar__link_type_desktop link_modifier"
      >
        Favorites
      </Link>
    </nav>
  );
};
