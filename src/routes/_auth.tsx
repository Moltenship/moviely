import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/_auth")({
	beforeLoad: async ({ context, location }) => {
		console.log(context);
		if (!context.auth.user && !context.auth.isLoading) {
			throw redirect({
				to: "/login",
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: Outlet,
});
