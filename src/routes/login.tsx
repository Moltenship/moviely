import { SignIn } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
export const Route = createFileRoute("/login")({
	validateSearch: z.object({
		redirect: z.string().optional().catch(""),
	}),
	component: RouteComponent,
});

function RouteComponent() {
	const params = Route.useSearch();
	return (
		<div className="flex h-[100vh] w-full items-center justify-center shad">
			<SignIn
				appearance={{
					elements: {
						headerTitle: "text-primary",
						headerSubtitle: "text-primary",
						cardBox: "border border-border",
						card: "bg-background text-primary",
						footerActionText: "text-primary",
						socialButtonsIconButton: "bg-white shadow-none hover:bg-black/10",
						footerActionLink:
							"text-primary underline underline-offset-4 hover:underline hover:text-primary",
						footer: "text-foreground bg-none bg-background",
					},
				}}
				fallbackRedirectUrl={params.redirect ?? "/"}
			/>
		</div>
	);
}
