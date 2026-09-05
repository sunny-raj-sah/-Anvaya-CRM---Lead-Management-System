 import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    user,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <nav className="navbar bg-white border-bottom px-4">
      <div className="container-fluid">

        <Link
          to="/"
          className="text-decoration-none text-dark"
        >
          <h4 className="mb-0">
            Anvaya CRM
          </h4>
        </Link>

        <div className="d-flex align-items-center gap-3">

          <span className="fw-semibold">
            Welcome, {user?.name} 👋
          </span>

          <button
            type="button"
            className="btn btn-outline-dark btn-sm"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;