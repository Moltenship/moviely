import { moviesApi } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { movieKeys } from "./keys";

export const useMovies = (page = 1) => {
	return useQuery({
		queryKey: movieKeys.list({ page }),
		queryFn: () =>
			moviesApi.getAllMovie({
				page,
			}),
	});
};
