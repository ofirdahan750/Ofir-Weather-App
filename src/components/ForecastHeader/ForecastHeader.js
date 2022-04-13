import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteAction } from "../../store/actions/forcastActions.js";

import { BsFillHeartFill } from "react-icons/bs";
export const ForecastHeader = ({ currentDay: { day, temperature } }) => {
  const { currentCityName, favoritesKeys } = useSelector(
    (state) => state.forecastModule
  );

  const dispatch = useDispatch();

  const isFavorite = favoritesKeys.some(
    (city) => city.cityName === currentCityName
  );

  useEffect(() => {
    toggleFavoriteAction(isFavorite);
  }, []);

  if (!currentCityName) return;

  return (
    <div className="forecast__header">
      <div className="forecast__city-name">
        <span>{currentCityName}</span>
        <p className="forecast__degrees">
          {day} {temperature}
        </p>
      </div>
      <div className="forecast__favorite-btn">
        <BsFillHeartFill
          className="forecast__favorite-btn-icon"
          color={`${isFavorite ? "hsl(0deg 64% 51% / 77%)" : ""}`}
          onClick={() => dispatch(toggleFavoriteAction(isFavorite))}
        />
      </div>
    </div>
  );
};
