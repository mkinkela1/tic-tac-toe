// AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllRoutes } from "src/enums/AllRoutes";
import { TLoginResponse } from "src/types/TLoginResponse";
import { TOKEN, USER_ID } from "src/utils/Constants";
import { isNotEmpty } from "src/utils/isEmpty";
import { isNullOrUndefined } from "src/utils/isNotNullOrUndefined";

type TLoginData = Pick<TLoginResponse, "id" | "token">;

type AuthContextType = {
  login: (data: TLoginData) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  userId: number | null;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem(USER_ID);
    const token = localStorage.getItem(TOKEN);

    if (isNotEmpty(token) && isNotEmpty(userId)) {
      setUserId(parseInt(userId ?? ""));
      setIsLoggedIn(true);
    }
  }, []);

  const login = ({ id, token }: TLoginData) => {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(USER_ID, id.toString());

    setIsLoggedIn(true);
    setUserId(id);

    navigate(AllRoutes.GAMES);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER_ID);

    setIsLoggedIn(false);
    setUserId(null);
  };

  const isAuthenticated = () => {
    return Boolean(isLoggedIn || localStorage.getItem(TOKEN));
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (isNullOrUndefined(context)) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};
