import { setSmallNumZero, getNameDay } from "../utils/utils.js";

export const setWeeklyForecastArr = (array, state, key) => {
  return array.map((item) => {
    const { Temperature, Day } = item;
    return {
      day: getNameDay(item.Date),
      temperature: Temperature.Minimum.Value.toFixed(),
      key: key ? key : state.cityKey,
      weatherText: Day.IconPhrase,
      iconNumber: setSmallNumZero(Day.Icon),
    };
  });
};
export const updateFavorite = (state, isFavorite) => {
  let newFavorites = state.favoritesKeys;
  if (isFavorite) {
    newFavorites = state.favoritesKeys.filter(
      (city) => city.key !== state.cityKey
    );
  } else {
    newFavorites = [
      ...state.favoritesKeys,
      { ...state.currentDay, cityName: state.currentCityName },
    ];
  }

  localStorage.setItem("favorites", JSON.stringify(newFavorites));

  return newFavorites;
};
