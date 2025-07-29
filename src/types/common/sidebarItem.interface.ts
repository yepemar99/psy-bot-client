import type { LucideIcon } from "lucide-react";

export interface ISidebarItem {
  title: string;
  url: string;
  icon?: LucideIcon;
}

export interface GroupedSidebarItem {
  title: string;
  items: ISidebarItem[];
}
