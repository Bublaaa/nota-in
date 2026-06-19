import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <>
      <aside className="h-full flex flex-col justify-between bg-white shadow-lg">
        <div className="flex flex-col">
          <SidebarHeader />
          <SidebarContent />
        </div>

        <SidebarFooter />
      </aside>
    </>
  );
}
