import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import LeadList from "../pages/Leads/LeadList";

import Reports from "../pages/Reports/Reports";
import CreateLead from "../pages/Leads/CreateLead";
import LeadDetails from "../pages/Leads/LeadDetails";
import EditLead from "../pages/Leads/EditLead";
// --------------------------------------------------------

import AgentList from "../pages/Agents/AgentList";
import CreateAgent from "../pages/Agents/CreateAgent";

import LeadStatusView from "../pages/LeadViews/LeadStatusView";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/leads" element={<LeadList />} />

        <Route path="/agents" element={<AgentList />} />
        <Route path="/agents/new" element={<CreateAgent />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/leads/new" element={<CreateLead />} />

        <Route path="/leads/:id" element={<LeadDetails />} />
        <Route path="/leads/edit/:id" element={<EditLead />} />

        <Route path="/leads/status" element={<LeadStatusView />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
