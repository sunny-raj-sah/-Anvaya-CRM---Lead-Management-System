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
     <nav className="navbar navbar-expand-md bg-white border-bottom">
  <div className="container-fluid px-4">

    <Link
      to="/"
      className="navbar-brand text-dark fw-semibold"
    >
      Anvaya CRM
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse"
      id="navbarContent"
    >
      <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 ms-md-auto py-3 py-md-0">

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

  </div>
</nav>
  );
};

export default Navbar;