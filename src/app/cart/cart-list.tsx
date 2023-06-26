import { Counter } from "@/components/counter/counter";
import { Ticket } from "@/components/ticket/ticket";
import { Movie, useGetMoviesQuery } from "@/redux/services/moviesApi"


export const CartList = ({

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
          <Counter shouldRemove={true}/>
          <Ticket.Close/>
        </Ticket>
      ))}
    </section>
  )
}