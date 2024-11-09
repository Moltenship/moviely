import type { AuthState } from "@instantdb/react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

type RouterContext = {
	auth: AuthState | undefined;
};

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => (
		<>
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	),
});
