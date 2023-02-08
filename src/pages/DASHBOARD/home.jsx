import React from "react";
import DashboardContainer from "@/pages/DASHBOARD/containers/dashboardContainer";
const Home = () => {
  let arr = ["kim", "park"];
  let obj = { name: "kim" };
  let differentType = 1;
  let name = 123;
  let john = [123, false];
  let A = { name: "kim", age: "123" };
  function func(x) {
    return x * 2;
  }
  return <DashboardContainer />;
};
export default Home;
