import { Menu } from "lucide-react";

export default function SidebarHeader() {
  return (
    <div className="flex flex-row justify-between p-4 text-xl font-bold text-center border-b border-light-gray">
      <div className="flex w-fit flex-row items-center gap-2">
        <div>Logo</div>
        <h6 className="whitespace-nowrap">Nota - in</h6>
        <Menu />
      </div>
    </div>
  );
}
