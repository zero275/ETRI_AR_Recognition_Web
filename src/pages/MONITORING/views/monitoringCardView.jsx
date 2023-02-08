import GoogleMapApi from "@/components/Map/googleMap";
import React from "react";

const MonitoringCardView = ({ title }) => {
  return (
    <div className="card flex8">
      <p className="card__title">{title}</p>
      <div className="card__table">{/* <GoogleMapApi /> */}</div>
      <div className="card__table__btn-container"></div>
    </div>
  );
};

export default MonitoringCardView;
