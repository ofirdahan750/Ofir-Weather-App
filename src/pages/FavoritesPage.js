import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ForecastList} from "../components/ForecastList/ForecastList";
import {loadFavoritesForecast} from "../store/actions/forcastActions.js";

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const {favoritesKeys, favorites} = useSelector(
    (state) => state.forecastModule
  );
  useEffect(() => {
    dispatch(loadFavoritesForecast(favoritesKeys));
  }, []);
  return (
    <div className="forecast animate-center">
      <section className="forecast__wrapper animate-center">
        {favorites.length ? (
          <ForecastList arrayData={favorites} />
        ) : (
          <div className="empty__list">No Favorites</div>
        )}
      </section>
    </div>
  );
};
