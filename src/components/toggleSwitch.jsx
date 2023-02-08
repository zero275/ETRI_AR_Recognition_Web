import React from "react";

const ToggleSwitch = ({ setToggleSwitchValue, title }) => {
  return (
    <>
      <input
        type="checkbox"
        id="switch"
        onClick={(e) => {
          const target = e.target;

          console.log(target.checked);
          setToggleSwitchValue(target.checked);
        }}
      />
      <label htmlFor="switch" className="toggle-switch_bar"></label>
      <span>Update Current Position</span>
    </>
  );
};

export default ToggleSwitch;
