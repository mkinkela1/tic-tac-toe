import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import RequireAuth from "src/components/RequireAuth";
import { AuthProvider } from "src/contexts/AuthContext";
import { AllRoutes } from "src/enums/AllRoutes";
import "src/index.css";
import Login from "src/pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path={AllRoutes.LOGIN} element={<Login />} />
          <Route path={AllRoutes.REGISTRATION} element={<>REGISTRATION</>} />
          <Route
            path={AllRoutes.GAMES}
            element={<RequireAuth>GAMES</RequireAuth>}
          />
          <Route path="*" element={<Navigate to={AllRoutes.LOGIN} replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
