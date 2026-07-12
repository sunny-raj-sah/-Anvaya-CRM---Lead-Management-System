import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
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
      className="bg-dark text-white p-3"
      style={{
        width: "260px",
        minHeight: "100vh",
      }}
    >
      <Link to="/" className="text-decoration-none text-white">
        <h4 className="mb-0 ">Anvaya CRM</h4>
      </Link>

      <div className="nav flex-column">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `nav-link mb-2 rounded ${
                isActive ? "bg-primary text-white" : "text-white"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
