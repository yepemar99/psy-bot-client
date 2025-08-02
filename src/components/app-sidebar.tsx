import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { GroupedSidebarItem } from "@/types/common/sidebarItem.interface";
import { Link } from "react-router-dom";

interface AppSidebarProps {
  itemGroups?: GroupedSidebarItem[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function AppSidebar({
  itemGroups = [],
  header,
  footer,
}: AppSidebarProps) {
  return (
    <Sidebar>
      {header && <SidebarHeader>{header}</SidebarHeader>}
      <SidebarContent>
        {itemGroups.map((group, i) => (
          <SidebarGroup
            className={`${i !== 0 ? "mt-4" : ""}`}
            key={group.title + "-" + i}
          >
            <SidebarGroupContent>
              {group.title && (
                <SidebarGroupLabel>
                  <h6 className="text-md">{group.title}</h6>
                </SidebarGroupLabel>
              )}
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </Sidebar>
  );
}
