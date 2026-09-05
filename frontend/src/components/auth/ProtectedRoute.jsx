import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = () => {
  const {
    user,
    token,
    loading,
  } = useAuth();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
          />

          <p className="mt-2 mb-0">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (!token || !user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;