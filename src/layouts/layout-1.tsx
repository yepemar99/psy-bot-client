import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer-sidebar";
import Header from "@/components/header";
import { default as SidebarHeader } from "@/components/header-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { GroupedSidebarItem } from "@/types/common/sidebarItem.interface";
import { SquarePen } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout1 = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar
        header={<SidebarHeader />}
        itemGroups={navItems}
        footer={
          <div>
            <Separator />
            <Footer />
          </div>
        }
      />
      <main className="w-full">
        <Header />
        <Separator />
        <div className="w-full mt-2">{children}</div>
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
