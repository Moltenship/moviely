import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@fontsource/geist-sans";
import { ClerkProvider } from "@clerk/clerk-react";
import { db } from "./db/db";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

// Create a new router instance
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	context: { auth: undefined },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const queryClient = new QueryClient();

const InnerApp = () => {
	const auth = db.useAuth();
	return <RouterProvider router={router} context={{ auth }} />;
};

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="moviely-ui-theme">
			<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
				<QueryClientProvider client={queryClient}>
					<InnerApp />
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</ClerkProvider>
		</ThemeProvider>
	</StrictMode>,
);
