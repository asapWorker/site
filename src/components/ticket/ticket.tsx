import styles from "./ticket.module.css";
import { Counter } from "../counter/counter";
import { FunctionComponent, useState} from "react";
import { MovieContextProvider, useMovieContext } from "../../contexts/MovieContext";
import { ImageWithPlaceholder } from "../image-with-placeholder/image-with-placeholder";
import classNames from "classnames";
import Link from "next/link";
import { Movie } from "@/redux/services/moviesApi";
import { TicketToggleProvider} from "@/contexts/TicketVisibilityToggleContext";
import Image from "next/image";

interface TicketComposition {
  Content: FunctionComponent,
  Close: FunctionComponent,
}

interface TicketProps {
  children: React.ReactNode,
  movie: Movie
}

export const Ticket: FunctionComponent<TicketProps> & TicketComposition = ({
  children,
  movie
}) => {
  const [isExist, setIsExist] = useState(true);

  const toggleVisibility = () => {
    setIsExist((cur) => !cur);
  }

  if (!isExist) return null;

  return (
    <section className={classNames('block', styles.ticket)}>
      <MovieContextProvider movie={movie}>
        <TicketToggleProvider toggleVisibility={toggleVisibility}>
          {children}
        </TicketToggleProvider>
      </MovieContextProvider>
    </section>
  )
}

Ticket.Content = function Content() {
  const movie = useMovieContext();

  return (
      <>
        <ImageWithPlaceholder
          imgUrl={movie.posterUrl}
          imageWithPlaceholderClassName={styles.poster}
        />

        <div className={styles["text-content-container"]}>
          <Link href={"/film/" + movie.id}>
            <h3>
              {movie.title}
            </h3>
          </Link>
          <div className={styles.genre}>
            {movie.genre}
          </div>
        </div>
      </>
  )
}

Ticket.Close = function Close() {
  return (
    <button>
      <Image
        src={"/close.svg"}
        alt={"close"}
        width={32}
        height={32}
      />
    </button>
  )
}