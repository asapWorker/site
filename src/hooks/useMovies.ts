import { useGetMoviesFromCinemaQuery } from "@/redux/services/moviesApi"

export const useMovies = ({

}) => {
  const {data, isLoading, error} = useGetMoviesFromCinemaQuery();
}