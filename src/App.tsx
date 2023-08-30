import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AllRoutes } from "src/enums/AllRoutes";
import "src/index.css";
import Login from "src/pages/Login";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={AllRoutes.LOGIN} element={<Login />} />
          <Route path={AllRoutes.REGISTRATION} element={<>REGISTRATION</>} />
          <Route path="*" element={<Navigate to={AllRoutes.LOGIN} replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
