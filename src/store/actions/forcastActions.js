import Axios from "../../axios.js";
import { API_KEY } from "../../confing.js";
import { setSmallNumZero } from "../../utils/utils.js";

export const loadWeeklyForecast = (key, cityName) => async (dispatch) => {
  try {
    const data = await Axios({
      url: `forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=true`,
      method: "GET",
    });

    dispatch({
      type: "SET_WEEKLY_FORECAST",
      payload: { data: data.DailyForecasts, key: key, cityName: cityName },
    });
  } catch (error) {
    console.log(error);
  }
};
export const toggleFavoriteAction = (isFavorite) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: isFavorite,
  };
};
export const loadFavoritesForecast = (array) => async (dispatch) => {
  try {
    const promisesArray = [];
    for (const item of array) {
      promisesArray.push(
        Axios({ url: `currentconditions/v1/${item.key}?apikey=${API_KEY}` })
      );
    }
    const data = await Promise.all(promisesArray);

    const foramtData = data.flatMap(([item]) => {
      const { Temperature, EpochTime, WeatherText, Link, WeatherIcon } = item;
      const keys = Link.split("/");
      return {
        temperatureMetric: Temperature.Metric.Value.toFixed(0),
        epochDate: EpochTime,
        weatherText: WeatherText,
        cityName: keys[5],
        key: keys[6],
        iconNumber: setSmallNumZero(WeatherIcon),
      };
    });

    dispatch({ type: "SET_FAVORITES_FORECAST", payload: foramtData });
  } catch (error) {
    console.log(error);
  }
};
