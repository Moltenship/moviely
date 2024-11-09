import { SignInClerk } from "@/components/signin-clerk";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => (
		<div>
			<SignedOut>
				<SignInButton mode="modal" />
			</SignedOut>
			<SignedIn>
				<SignInClerk />
			</SignedIn>
			<Link to="/test">Test</Link>
		</div>
	),
});
