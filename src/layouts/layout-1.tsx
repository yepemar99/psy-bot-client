import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer-sidebar";
import Header from "@/components/header";
import { default as SidebarHeader } from "@/components/header-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import usePaginationChats from "@/hooks/usePaginationChats";
import { useUser } from "@/hooks/useUser";
import type {
  GroupedSidebarItem,
  ISidebarItem,
} from "@/types/common/sidebarItem.interface";
import { SquarePen } from "lucide-react";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout1 = ({ children }: LayoutProps) => {
  const { user } = useUser();
  const { data: chats } = usePaginationChats({ userId: user?.id || "" });
  const [dynamicNavs, setDynamicsChats] = useState<ISidebarItem[]>([]);

  useEffect(() => {
    const navs: ISidebarItem[] = chats.map((chat) => ({
      title: chat.name,
      url: "/chat/" + chat?.id || "",
    }));
    setDynamicsChats(navs);
  }, [chats]);

  return (
    <SidebarProvider>
      <AppSidebar
        header={<SidebarHeader />}
        itemGroups={[
          navItems[0],
          {
            title: dynamicNavs.length > 0 ? "Chats" : "",
            items: dynamicNavs,
          },
        ]}
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
];
