import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
    },
    {
      title: "Leads",
      path: "/leads",
    },
    {
      title: "Sales Agents",
      path: "/agents",
    },
    {
      title: "Reports",
      path: "/reports",
    },
    {
      title: "Settings",
      path: "/settings",
    },
  ];

  return (
     <div
    className={`bg-dark text-white min-vh-100 p-3 ${
      collapsed ? "sidebar-collapsed" : "sidebar-expanded"
    }`}
    style={{
      width: collapsed ? "80px" : "260px",
      transition: "width 0.3s ease",
    }}
  >
    {/* Header */}
    <div className="d-flex align-items-center justify-content-between mb-4">

      {!collapsed && (
        <Link
          to="/"
          className="text-decoration-none text-white"
        >
          <h4 className="mb-0">Anvaya CRM</h4>
        </Link>
      )}

      <button
        type="button"
        className="btn btn-outline-light btn-sm"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "☰" : "‹"}
      </button>

    </div>

    {/* Navigation */}
    <div className="nav flex-column">

      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `nav-link mb-2 rounded text-white ${
              isActive ? "bg-primary" : ""
            }`
          }
        >
          {/* If you have icons, put them here */}
          <span>
            {item.icon}
          </span>

          {!collapsed && (
            <span className="ms-2">
              {item.title}
            </span>
          )}
        </NavLink>
      ))}

    </div>
  </div>
     
  );
};

export default Sidebar;
