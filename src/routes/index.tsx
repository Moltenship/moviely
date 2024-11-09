import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => <h1>Hello World</h1>,
});