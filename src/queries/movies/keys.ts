export const movieKeys = {
	all: ["movie"],
	lists: () => [...movieKeys.all, "list"] as const,
	list: (options: { page: number }) =>
		[...movieKeys.all, "list", options] as const,
} as const;
