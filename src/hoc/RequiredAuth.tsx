import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type TRequired = {
  children?: ReactNode;
};

export const RequiredAuth = ({ children }: TRequired) => {
  const location = useLocation();
  const user = useSelector((state: any) => state.userData.data);

  if (Object.keys(user).length === 0) {
    console.log(Object.keys(user).length);
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
