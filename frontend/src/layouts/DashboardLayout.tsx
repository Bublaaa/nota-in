import { Outlet } from "react-router-dom";
import { lazy } from "react";

const Sidebar = lazy(() => import("../components/sidebar/Sidebar"));

export default function DashboardLayout() {
  return (
    <div className="flex flex-row w-full h-screen items-end bg-white-shadow overflow-y-auto scrollbar-hidden">
      <div className="h-full w-fit bg-blue-300">
        <Sidebar />
      </div>
      <div className="h-full w-full bg-blue-200">
        <h1>Outlet</h1>
        <Outlet />
      </div>
    </div>
  );
}
