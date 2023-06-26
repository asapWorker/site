"use client";

import { FunctionComponent, createContext, useContext } from "react";
import { Movie } from "@/redux/services/moviesApi";

const MovieContext = createContext<Movie>({} as Movie);

export function useMovieContext() {
  return useContext(MovieContext);
}

interface MovieContextProviderProps {
  movie: Movie,
  children: React.ReactNode
}

export const MovieContextProvider: FunctionComponent<MovieContextProviderProps> = ({
  movie,
  children
}) => {
  return <MovieContext.Provider value={movie}>
    {children}
  </MovieContext.Provider>
}

