import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Movie {
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: string,
  id: string,
  rating: number,
  director: string,
  reviewIds: string[]
}

export const moviesApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({ query: () => "movies" }),
    getMovie: builder.query<Movie, string>({ query: (movieId) => `movie?movieId=${movieId}` }),
    getMoviesFromCinema: builder.query<Movie[], string>({query: (cinemaId) => `movies?cinemaId=${cinemaId}`})
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetMoviesFromCinemaQuery } = moviesApi;