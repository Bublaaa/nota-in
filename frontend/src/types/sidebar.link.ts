import { type LucideIcon } from "lucide-react";

export type SidebarLink = {
  label: string;
  href?: string; // optional for parent
  icon: LucideIcon;

  children?: SidebarLink[];
};
