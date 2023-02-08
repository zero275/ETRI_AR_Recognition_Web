import React, { useState } from "react";
import MonitoringBoxView from "@/pages/MONITORING/views/monitoringBoxView";
import MonitoringCardInfoView from "@/pages/MONITORING/views/monitoringCardInfoView";
import MonitoringCardView from "@/pages/MONITORING/views/monitoringCardView";

const MonitoringContainer = () => {
  const [toggleSwitchValue, setToggleSwitchValue] = useState(false);
  let btnList = ["Post Processing", "Delete Dataset"];
  const btnList2 = [
    "Create Training Dataset",
    "Delete PPTraining Dataset",
    "Post Processing Status",
  ];
  const fileList = [
    {
      filename: ".csv",
      size: "20KB",
    },
    {
      filename: "1.csv",
      size: "20KB",
    },
    {
      filename: "2.csv",
      size: "20KB",
    },
  ];

  return (
    <main>
      <MonitoringBoxView setToggleSwitchValue={setToggleSwitchValue} />{" "}
      <div className="flex-row">
        <MonitoringCardView title="수집작업 진행상황 모니터링(Collection Status Map)" />
        <MonitoringCardInfoView title="상세정보" fileList={fileList} />{" "}
      </div>{" "}
    </main>
  );
};

export default MonitoringContainer;
