import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../services/axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
  ----------------------------------------
  Login
  ----------------------------------------
  */

  const login = async (
    email,
    password
  ) => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        data.token
      );

      setToken(data.token);
      setUser(data.user);

      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Login failed.";

      setError(message);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  /*
  ----------------------------------------
  Register
  ----------------------------------------
  */

  const register = async (
    name,
    email,
    password
  ) => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await api.post(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        data.token
      );

      setToken(data.token);
      setUser(data.user);

      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Registration failed.";

      setError(message);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  /*
  ----------------------------------------
  Get Current User
  ----------------------------------------
  */

  const getCurrentUser = async () => {
    const storedToken =
      localStorage.getItem("token");

    if (!storedToken) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await api.get(
        "/auth/me",
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      setUser(data.user);
      setToken(storedToken);
    } catch (error) {
        console.log(error)
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  /*
  ----------------------------------------
  Logout
  ----------------------------------------
  */

  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);
    setUser(null);
    setError(null);
  };

  /*
  ----------------------------------------
  Load user when application starts
  ----------------------------------------
  */

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        login,
        register,
        logout,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/*
----------------------------------------
Custom Hook
----------------------------------------
*/

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;