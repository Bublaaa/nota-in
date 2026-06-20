import { useState } from "react";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`h-full flex flex-col bg-white justify-between shadow-lg ${isCollapsed ? "w-1/12" : "w-1/6"}`}
    >
      <div className="">
        <SidebarHeader
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed((prev) => !prev)}
        />

        <div className="flex-1 overflow-y-auto">
          <SidebarContent isCollapsed={isCollapsed} />
        </div>
      </div>

      <SidebarFooter isCollapsed={isCollapsed} />
    </aside>
  );
}
