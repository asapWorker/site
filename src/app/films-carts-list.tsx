import { useGetMoviesQuery } from "@/redux/services/moviesApi"
import { Ticket } from "@/components/ticket/ticket";
import { Movie } from "@/redux/services/moviesApi";
import { FunctionComponent } from "react";
import { Counter } from "@/components/counter/counter";

interface FilmsCartsListProps {
}

export const FilmsCartsList: FunctionComponent<FilmsCartsListProps> = ({
}) => {
  const {data, isLoading, error} = useGetMoviesQuery();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <section className={"list"}>
      {data.map((movie: Movie) => (
        <Ticket key={movie.id} movie={movie}>
          <Ticket.Content/>
          <Counter/>
        </Ticket>
      ))}
    </section>
  )
}