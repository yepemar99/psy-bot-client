import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer-sidebar";
import Header from "@/components/header-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { GroupedSidebarItem } from "@/types/common/sidebarItem.interface";
import { Search, SquarePen } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout1 = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar
        header={<Header />}
        itemGroups={navItems}
        footer={
          <div>
            <Separator />
            <Footer />
          </div>
        }
      />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout1;

const navItems: GroupedSidebarItem[] = [
  {
    title: "",
    items: [
      {
        title: "Nuevo chat",
        url: "#",
        icon: SquarePen,
      },
      {
        title: "Buscar chats",
        url: "#",
        icon: Search,
      },
    ],
  },
  {
    title: "Chats",
    items: [
      {
        title: "Chat 1",
        url: "#",
      },
      {
        title: "Chat 2",
        url: "#",
      },
    ],
  },
];
