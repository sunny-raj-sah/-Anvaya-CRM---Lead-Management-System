import { Link } from "react-router-dom";
const Navbar = () => {
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

        <span className="fw-semibold">
          Welcome 👋
        </span>

      </div>
    </nav>
  );
};

export default Navbar;