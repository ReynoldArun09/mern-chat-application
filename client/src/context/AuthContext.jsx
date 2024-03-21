/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    setIsAuthLoading(false);
    const auth = JSON.parse(localStorage.getItem("chat-app"));
    if (auth) {
      setAuthUser(auth);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, isAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
