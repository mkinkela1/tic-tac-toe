import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext";
import { AllRoutes } from "src/enums/AllRoutes";

type Props = {
  children: React.ReactNode;
};

const RequireAuth: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated()) return children;

  return <Navigate to={AllRoutes.LOGIN} />;
};

export default RequireAuth;
