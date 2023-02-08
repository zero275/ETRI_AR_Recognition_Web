import SwitchToggle from "@/components/toggleSwitch";
import React from "react";

const MonitoringBoxView = ({ setToggleSwitchValue }) => {
  return (
    <div className="multi-box">
      <div className="multil-box__container">
        <p>수집작업 목록</p>
        <select name="" id="">
          <option value="ALL">ALL</option>
          <option value="3000">3000</option>
          <option value="3001">3001</option>
        </select>

        <SwitchToggle
          setToggleSwitchValue={setToggleSwitchValue}
          title="Update Current Position"
        />

        {/* <label htmlFor="input">deley time</label> */}
        <input
          style={{ margin: "1em" }}
          type="text"
          placeholder="Deley time (sec)"
          className="input-type1"
        />
      </div>
    </div>
  );
};

export default MonitoringBoxView;
