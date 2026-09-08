import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const DashboardLayout = () => {
  return (
    <div className="d-flex min-vh-100">

      {/* Desktop Sidebar */}
      <div className="d-none d-md-block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 min-vw-0 bg-light">

        <Navbar />

        <main className="container-fluid py-3 py-md-4 pb-5 pb-md-4">
          <Outlet />
        </main>

      </div>

      {/* Mobile Bottom Navigation */}
      <div className="d-md-none fixed-bottom bg-dark border-top">
        <Sidebar mobile />
      </div>

    </div>
  );
};

export default DashboardLayout;