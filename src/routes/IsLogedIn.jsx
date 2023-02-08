import { isEmpty } from "@/utils/common/commonUtils";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const IsLoggedIn = ({ auth, location }) => {
  const next = useLocation();

  return (
    <>
      {!isEmpty(auth) ? (
        <Navigate to="/Home" state={{ from: next }} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default IsLoggedIn;
