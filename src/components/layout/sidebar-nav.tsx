
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Bookmark, BarChart2, Users, Briefcase } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { APP_NAME } from "@/lib/constants";
import { Separator } from "../ui/separator";

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex items-center gap-2 border-b">
        <Briefcase className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold text-primary group-data-[collapsible=icon]:hidden">
          {APP_NAME}
        </h2>
      </div>
      <Separator className="group-data-[collapsible=icon]:hidden" />
      <SidebarMenu className="flex-1 p-4">
        {navItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              tooltip={{ children: item.label, className: "group-data-[collapsible=icon]:block hidden" }}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      {/* Optional Footer Content for Sidebar */}
      {/* <Separator className="group-data-[collapsible=icon]:hidden" />
      <div className="p-4 group-data-[collapsible=icon]:hidden">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} {APP_NAME}</p>
      </div> */}
    </div>
  );
}
