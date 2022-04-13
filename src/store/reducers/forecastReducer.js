import { setWeeklyForecastArr, updateFavorite } from "../forecastIndex.js";
const initialState = {
  weeklyForecast: [],
  currentDay: null,
  currentCityName: "Tel-aviv",
  cityKey: "215854",
  favoritesKeys: JSON.parse(localStorage.getItem("favorites")) || [],
  favorites: [],
};
export function forcastReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_WEEKLY_FORECAST":
      const weeklyForecastArr = setWeeklyForecastArr(
        action.payload.data,
        state,
        action.payload.key
      );
      return {
        ...state,
        weeklyForecast: weeklyForecastArr,
        currentDay: weeklyForecastArr[0],
        cityKey: action.payload.key,
        currentCityName: action.payload.cityName,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favoritesKeys: updateFavorite(state, action.payload),
      };
      case "SET_FAVORITES_FORECAST": 
      return {
        ...state,
        favorites: action.payload,
      }; 
    default:
      return state;
  }
}
