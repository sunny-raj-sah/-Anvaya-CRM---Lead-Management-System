import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const DashboardLayout = () => {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1 bg-light min-vh-100">

        <Navbar />

        <div className="container-fluid py-4">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;