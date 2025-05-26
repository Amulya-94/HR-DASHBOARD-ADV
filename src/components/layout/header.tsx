
import { APP_NAME } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">{APP_NAME}</h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {/* Placeholder for potential search bar in header */}
          {/* <Input placeholder="Search..." className="hidden md:block w-64" /> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
