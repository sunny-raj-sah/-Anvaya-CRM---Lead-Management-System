import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ mobile = false }) => {
  const menuItems = [
    {
      title: "Dashboard",
      shortTitle: "Home",
      path: "/",
      icon: "🏠",
    },
    {
      title: "Leads",
      shortTitle: "Leads",
      path: "/leads",
      icon: "👥",
    },
    {
      title: "Sales Agents",
      shortTitle: "Agents",
      path: "/agents",
      icon: "💰",
    },
    {
      title: "Reports",
      shortTitle: "Reports",
      path: "/reports",
      icon: "📊",
    },
    {
      title: "Settings",
      shortTitle: "Settings",
      path: "/settings",
      icon: "⚙️",
    },
  ];

  /* =========================
     MOBILE BOTTOM NAVIGATION
  ========================= */

  if (mobile) {
    return (
      <nav className="d-flex justify-content-around align-items-center py-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `text-decoration-none text-center ${
                isActive ? "text-primary" : "text-white"
              }`
            }
          >
            <div className="fs-5">
              {item.icon}
            </div>

            <small>
              {item.shortTitle}
            </small>
          </NavLink>
        ))}

      </nav>
    );
  }

  /* =========================
     DESKTOP SIDEBAR
  ========================= */

  return (
    <aside className="bg-dark text-white vh-100 position-sticky top-0 d-flex flex-column p-3">

      {/* Logo */}
      <div className="mb-4 flex-shrink-0">
        <Link
          to="/"
          className="text-decoration-none text-white"
        >
          <h4 className="mb-0">
            Anvaya CRM
          </h4>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="nav flex-column overflow-auto">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `nav-link text-white rounded mb-2 ${
                isActive ? "bg-primary" : ""
              }`
            }
          >
            <span className="me-2">
              {item.icon}
            </span>

            {item.title}
          </NavLink>
        ))}

      </nav>

    </aside>
  );
};

export default Sidebar;