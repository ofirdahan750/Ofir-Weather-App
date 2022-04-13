import React from "react";
import { ForecastCard } from "../ForecastCard/ForecastCard.js";

export const ForecastList = ({ arrayData }) => {
  return (
    <div className="forecast__list">
      {arrayData.map((item, idx) => (
        <ForecastCard key={Math.floor(idx + Date.now())} dayInfo={item} />
      ))}
    </div>
  );
};
