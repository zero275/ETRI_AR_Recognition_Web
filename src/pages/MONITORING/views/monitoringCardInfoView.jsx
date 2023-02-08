import React from "react";
import { FileListInterface } from "@/pages/MONITORING/containers/monitoringContainer";

const MonitoringCardInfoView = ({ title, fileList }) => {
  return (
    <div className="card flex2">
      <p className="card__title">{title}</p>
      <div className="card__dataset">
        <p className="card__dataset__list">Scenario</p>
        <p className="card__dataset__list">Site</p>
        <p className="card__dataset__list">Building</p>
        <p className="card__dataset__list">Floor</p>
        <p className="card__dataset__list">Route(waypoints)</p>
        <p className="card__dataset__list">Start time</p>
        <p className="card__dataset__list">End time</p>
        <p className="card__dataset__list">User</p>
        <p className="card__dataset__list">Ground Truth</p>
        <p className="card__dataset__list">Phone Model</p>
      </div>
      <div className="card__files">
        <div className="card_files__th">
          <p className="card__files__th__file-name">파일명</p>
          <p className="card__files__th__size">Size</p>
        </div>
        {fileList?.map((list) => {
          return (
            <div
              key={`${list?.filename}+${list?.size}`}
              className="card_files__td"
            >
              <p key={list?.filename} className="card__files__td__file-name">
                {list.filename}
              </p>
              <p key={list?.size} className="card__files__td__size">
                {list.size}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonitoringCardInfoView;
