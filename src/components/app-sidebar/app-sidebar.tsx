import type { ComponentProps } from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "../ui/sidebar";
import { Logo } from "./logo";
import { UserCard } from "./user-card";

export const AppSidebar = ({ ...props }: ComponentProps<typeof Sidebar>) => {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<Logo />
			</SidebarHeader>
			<SidebarContent>Some content</SidebarContent>
			<SidebarFooter>
				<UserCard />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
};