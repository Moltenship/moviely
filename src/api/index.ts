import { type Middleware, MoviesApi } from "@/generated-api";
import { getToken } from "./login";

const middleware: Middleware = {
	pre: async (ctx) => {
		const token = await getToken();
		const headers = new Headers(ctx.init.headers);
		headers.append("Authorization", `Bearer ${token}`);
		return { ...ctx, init: { ...ctx.init, headers } };
	},
	post: async (ctx) => {
		if (ctx.response.status === 401) {
			const token = await getToken();
			const headers = new Headers(ctx.init.headers);
			headers.append("Authorization", `Bearer ${token}`);
			return fetch(ctx.url, { ...ctx.init, headers });
		}
	},
};

export const moviesApi = new MoviesApi().withMiddleware(middleware);
