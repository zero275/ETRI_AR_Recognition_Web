import { COLOR } from "@/constants/constant";
import React from "react";
import { MutatingDots } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <MutatingDots
      wrapperClass="spinner"
      color={COLOR.YELLOW_PR}
      secondaryColor={COLOR.GREEN_PR}
    />
  );
};

export default LoadingSpinner;
