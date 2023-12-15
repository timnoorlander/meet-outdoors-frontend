import React from "react";
import { createContext, useContext, useState } from "react";

type AuthenticationProviderProps = {
  children: React.ReactNode;
};

type AuthenticationProviderValue = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
};

const AuthenticationContext = createContext<
  AuthenticationProviderValue | undefined
>(undefined);

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const contextValue = React.useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated]
  );

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
