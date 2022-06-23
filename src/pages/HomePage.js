import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {loadWeeklyForecast} from "../store/actions/forcastActions.js";
import {ForecastList} from "../components/ForecastList/ForecastList.js";
import {AppSearch} from "../components/AppSearch/AppSearch.js";
import {ForecastHeader} from "../components/ForecastHeader/ForecastHeader.js";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const {weeklyForecast} = useSelector((state) => state.forecastModule);

  useEffect(() => {
    const {cityKey, cityName} = getParams();
    if (!cityKey && !cityName) {
      navigate("/Ofir-Weather-App?key=215854&cityName=Tel Aviv");
      setDispatch();
    } else {
      setDispatch(cityKey, cityName);
    }
  }, []);

  const getParams = () => {
    return {cityKey: params.get("key"), cityName: params.get("cityName")};
  };
  const setDispatch = (cityKey, cityName) => {
    dispatch(loadWeeklyForecast(cityKey, cityName));
  };
  if (!weeklyForecast.length) return <div>Loading...</div>;
  return (
    <section className="forecast">
      <AppSearch setDispatch={setDispatch} />
      <ForecastHeader currentDay={weeklyForecast[0]} />
      {weeklyForecast.length ? (
        <ForecastList arrayData={weeklyForecast} />
      ) : (
        <h3 className="forecast__empty-list">No Forecast available</h3>
      )}
    </section>
  );
};
