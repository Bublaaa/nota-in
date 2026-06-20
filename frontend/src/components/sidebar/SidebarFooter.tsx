import { LogOut } from "lucide-react";

type SidebarFooterProps = {
  isCollapsed: boolean;
};

export default function SidebarFooter({ isCollapsed }: SidebarFooterProps) {
  return (
    <div className="flex flex-col gap-4 py-4 pl-4 border-t border-light-gray">
      {/* Log Out Button */}
      <button
        className={`flex flex-row items-center gap-2 text-red bg-light-red py-5 pl-3 rounded-tl-md rounded-bl-md cursor-pointer ${isCollapsed ? "justify-center" : "justify-left"}`}
      >
        <LogOut className={`h-5 w-5 ${isCollapsed ? "mr-3" : "mr-0"}`} />
        {!isCollapsed && <span>Log Out</span>}
      </button>
      {/* Copyright */}
      <p>© 2026 Laundry</p>
    </div>
  );
}
