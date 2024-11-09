import type { AuthState } from "@instantdb/react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

type RouterContext = {
	auth: AuthState;
};

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => (
		<div>
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	),
});
