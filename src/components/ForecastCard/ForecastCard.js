import React from "react";

export const ForecastCard = ({dayInfo}) => {
  return (
    <article className="forecast__card">
      <img
        src={`https://developer.accuweather.com/sites/default/files/${dayInfo.iconNumber}-s.png`}
        className="forecast__sky-image"
        alt={`The weather is ${dayInfo?.weatherText}`}
      />
      <p className="forecast__degrees">
        {dayInfo?.temperature} {dayInfo?.temperatureMetric}
      </p>
      <h2 className="forecast__location">{dayInfo?.cityName}</h2>
      <p className="forcast__day">{dayInfo?.day} </p>
      <p className="forcast__weather-text">{dayInfo?.weatherText}</p>
    </article>
  );
};
