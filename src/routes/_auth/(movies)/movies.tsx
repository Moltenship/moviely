import { MovieCard } from "@/components/movie-card";
import { useMovies } from "@/queries/movies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/(movies)/movies")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data, isLoading } = useMovies();

	if (isLoading) {
		return (
			<div className="grid grid-cols-6 gap-8">
				{Array.from({ length: 100 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<MovieCard key={i} movie={undefined} isLoading={true} />
				))}
			</div>
		);
	}

	return (
		<div className="grid grid-cols-6 gap-8">
			{data?.data?.map((movie) => (
				<MovieCard key={movie.id} movie={movie} isLoading={isLoading} />
			))}
		</div>
	);
}
