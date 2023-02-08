import React from "react";
import { FileListInterface } from "@/pages/TRAINING/containers/trainingContainer";

const TrainingCardInfoView = ({ title, fileList }) => {
  return (
    <div className="card flex2">
      <p className="card__title">{title}</p>
      <div className="card__dataset">
        <p className="card__dataset__list">User</p>
        <p className="card__dataset__list">Route file</p>
        <p className="card__dataset__list">backpack</p>
        <p className="card__dataset__list">phonemodel</p>
        <p className="card__dataset__list">length</p>
        <p className="card__dataset__list">Dataset Filepath</p>
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

export default TrainingCardInfoView;
