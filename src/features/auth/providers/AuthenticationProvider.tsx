import axios, { AxiosError } from "axios";
import React from "react";
import { createContext, useContext, useState } from "react";

type AuthenticationProviderProps = {
  children: React.ReactNode;
};

type AuthenticationProviderValue = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthenticationContext = createContext<
  AuthenticationProviderValue | undefined
>(undefined);

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("access_token", response.data.access_token);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          throw new Error(error.response?.data?.message);
        }

        if (error.response?.status === 401) {
          throw new Error("Email or password incorrect.");
        }
      }

      throw new Error(
        "Something went wrong while logging in. Please try again later."
      );
    }

    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("access_token", "");
  };

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
