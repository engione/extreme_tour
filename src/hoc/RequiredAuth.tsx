import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type TRequired = {
  children?: ReactNode;
};

export const RequiredAuth = ({ children }: TRequired) => {
//   const [auth, setAuth] = useState<boolean>();

  const location = useLocation();
  const user_metadata = useSelector((state: any) => state.user_metadata);
//   useEffect(() => {
//     Object.keys(user_metadata).length === 0 ? setAuth(false) : setAuth(true);
//   }, [user_metadata]);

  if (Object.keys(user_metadata).length === 0) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
