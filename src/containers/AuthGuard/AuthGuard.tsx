import React, { ReactNode, FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ROOTS_MAIN } from "../../routes/path";

interface IAuthGuard {
  children: ReactNode;
}

const AuthGuard: FC<IAuthGuard> = ({ children }) => {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return <Navigate to={ROOTS_MAIN} />;
  }

  return <>{children}</>;
};

export default AuthGuard;
