import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AllRoutes } from "src/enums/AllRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={AllRoutes.LOGIN} element={<>LOGIN</>} />
        <Route path={AllRoutes.REGISTRATION} element={<>REGISTRATION</>} />
        <Route path="*" element={<Navigate to={AllRoutes.LOGIN} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
