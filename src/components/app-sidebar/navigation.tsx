import { Link } from "@tanstack/react-router";
import { Film } from "lucide-react";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar";

const navigation = [
	{
		name: "Movies",
		href: "/movies",
		icon: Film,
	},
];

export const Navigation = () => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Browse</SidebarGroupLabel>
			<SidebarMenu>
				{navigation.map((item) => (
					<SidebarMenuItem key={item.name}>
						<Link to={item.href}>
							{({ isActive }) => (
								<SidebarMenuButton tooltip={item.name} isActive={isActive}>
									<item.icon />
									<span>{item.name}</span>
								</SidebarMenuButton>
							)}
						</Link>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
};
