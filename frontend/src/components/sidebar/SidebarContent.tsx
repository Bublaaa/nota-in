import { LayoutDashboard, Package, Circle, ChevronRight } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { SidebarLink } from "../../types/sidebar.link";

const sidebarLinks: SidebarLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Orders",
    icon: Package,
    children: [
      {
        label: "All Orders",
        href: "/orders",
        icon: Circle,
      },
      {
        label: "Pending",
        href: "/orders/pending",
        icon: Circle,
      },
    ],
  },
];

type SidebarContentProps = {
  isCollapsed: boolean;
};

export default function SidebarContent({ isCollapsed }: SidebarContentProps) {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };

  return (
    <ul className="px-4 py-4">
      {sidebarLinks.map((link) => {
        const Icon = link.icon;

        // CASE 1: Has children → Accordion
        if (link.children?.length) {
          const isOpen = openMenus.includes(link.label);

          return (
            <li key={link.label}>
              {/* Parent button */}
              <button
                onClick={() => toggleMenu(link.label)}
                className={`flex w-full items-center px-3 py-5 bg-white text-gray-600 hover:bg-light-gray rounded-lg ${isCollapsed ? "justify-center" : "justify-between"}`}
              >
                <div className="flex items-center">
                  <Icon className="mr-3 h-5 w-5" />
                  <span
                    className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
                  >
                    {link.label}
                  </span>
                </div>

                {!isCollapsed && (
                  <ChevronRight
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>

              {/* Children */}
              {isOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  {link.children.map((child) => {
                    return (
                      <li key={child.href}>
                        <NavLink
                          to={child.href!}
                          className={({ isActive }) =>
                            `
                            flex items-center px-3 py-2 text-sm
                            ${
                              isActive
                                ? "text-accent"
                                : "text-gray-500 hover:text-gray-900"
                            }
                            `
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        }

        // CASE 2: Normal link
        return (
          <li key={link.href}>
            <NavLink
              to={link.href!}
              className={({ isActive }) =>
                `
                flex items-center px-3 py-5
                ${
                  isActive
                    ? "bg-white text-accent"
                    : "bg-white text-gray-500 hover:bg-light-gray rounded-lg hover:text-gray-900"
                }
                ${isCollapsed ? "justify-center" : "justify-left"}
                `
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
              >
                {link.label}
              </span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
