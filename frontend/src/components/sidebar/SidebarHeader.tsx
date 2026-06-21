import { Menu } from "lucide-react";

type SidebarHeaderProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};
export default function SidebarHeader({
  isCollapsed,
  onToggle,
}: SidebarHeaderProps) {
  return (
    <div className="flex flex-row justify-between p-4 text-xl font-bold text-center border-b border-light-gray bg-white">
      <div className="flex w-fit flex-row items-center gap-2">
        <div>Logo</div>
        {!isCollapsed && <h6 className="whitespace-nowrap">Nota - in</h6>}
      </div>
      <button onClick={onToggle} className="cursor-pointer">
        <Menu />
      </button>
    </div>
  );
}
