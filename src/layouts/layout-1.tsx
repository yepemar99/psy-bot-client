import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { ISidebarItem } from "@/types/common/sidebarItem.interface";
import { SquarePen } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout1 = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar items={navItems} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout1;

const navItems: ISidebarItem[] = [
  {
    title: "Nuevo chat",
    url: "#",
    icon: SquarePen,
  },
];
