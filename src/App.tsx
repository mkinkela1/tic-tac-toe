import React from "react";
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "src/components/Page";
import RequireAuth from "src/components/RequireAuth";
import { AuthProvider } from "src/contexts/AuthContext";
import { AllRoutes } from "src/enums/AllRoutes";
import "src/index.css";
import Game from "src/pages/Game";
import GamesList from "src/pages/GamesList";
import Highscores from "src/pages/Highscores";
import Login from "src/pages/Login";
import Registration from "src/pages/Registration";

const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path={AllRoutes.LOGIN} element={<Login />} />
          <Route path={AllRoutes.REGISTRATION} element={<Registration />} />
          <Route
            path={AllRoutes.GAMES}
            element={
              <RequireAuth>
                <Page>
                  <GamesList />
                  <Outlet />
                </Page>
              </RequireAuth>
            }
          >
            <Route
              path=":id"
              element={
                <RequireAuth>
                  <Game />
                </RequireAuth>
              }
            />
          </Route>
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
