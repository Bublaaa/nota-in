import { LayoutDashboard, Package, Circle } from "lucide-react";
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

export default function SidebarContent() {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };

  return (
    <ul className="space-y-2">
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
                className="
                  flex w-full items-center justify-between px-3 py-3
                  bg-white text-gray-600 hover:bg-gray-100
                "
              >
                <div className="flex items-center">
                  <Icon className="mr-3 h-5 w-5" />
                  <span className="text-sm font-medium">{link.label}</span>
                </div>

                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {/* Children */}
              {isOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  {link.children.map((child) => {
                    const ChildIcon = child.icon;

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
                          <ChildIcon className="mr-2 h-4 w-4" />
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
                flex items-center px-3 py-3
                ${
                  isActive
                    ? "bg-white text-accent"
                    : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }
                `
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              <span className="text-sm font-medium">{link.label}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
