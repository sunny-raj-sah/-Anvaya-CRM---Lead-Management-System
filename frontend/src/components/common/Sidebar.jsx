import { NavLink } from "react-router-dom";

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
      <h3 className="text-center mb-4">Anvaya CRM</h3>

      <div className="nav flex-column">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `nav-link mb-2 rounded ${
                isActive
                  ? "bg-primary text-white"
                  : "text-white"
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