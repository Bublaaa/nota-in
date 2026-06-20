import { Outlet } from "react-router-dom";
import { lazy } from "react";

const Sidebar = lazy(() => import("../components/sidebar/Sidebar"));

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
