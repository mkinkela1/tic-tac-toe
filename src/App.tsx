import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Page from "src/components/Page";
import RequireAuth from "src/components/RequireAuth";
import { AuthProvider } from "src/contexts/AuthContext";
import { AllRoutes } from "src/enums/AllRoutes";
import "src/index.css";
import GamesList from "src/pages/GamesList";
import Highscores from "src/pages/Highscores";
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
            element={
              <RequireAuth>
                <Page>
                  <GamesList />
                </Page>
              </RequireAuth>
            }
          />
          <Route
            path={AllRoutes.HIGHSCORES}
            element={
              <RequireAuth>
                <Page>
                  <Highscores />
                </Page>
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to={AllRoutes.LOGIN} replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
