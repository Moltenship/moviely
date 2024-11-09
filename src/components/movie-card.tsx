import type { MovieBaseRecord } from "@/generated-api";
import { Skeleton } from "./ui/skeleton";

type Props =
	| {
			movie: MovieBaseRecord;
			isLoading: false;
	  }
	| {
			movie: undefined;
			isLoading: true;
	  };

export const MovieCard = ({ movie, isLoading }: Props) => {
	if (isLoading) {
		return <Skeleton className="h-[400px]" />;
	}

	return (
		<div
			className="flex flex-col w-full h-[400px] bg-cover rounded-lg border border-border overflow-hidden"
			style={{
				backgroundImage: `url(https://artworks.thetvdb.com${movie.image})`,
			}}
		>
			<div className="mt-auto px-4 py-2 bg-black/40 text-white">
				<div className="font-medium text-lg line-clamp-2">{movie.name}</div>
				<div className="text-sm">{movie.runtime} min</div>
			</div>
		</div>
	);
};
