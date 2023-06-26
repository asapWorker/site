import styles from "./counter.module.css";
import { FunctionComponent, useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";
import Image from "next/image";
import { useTicketVisibilityToggleContext } from "@/contexts/TicketVisibilityToggleContext";
import { useMovieContext } from "@/contexts/MovieContext";

interface CounterProps {
  shouldRemove?: boolean
}

export const Counter: FunctionComponent<CounterProps> = ({
  shouldRemove = false
}) => {
  const movie = useMovieContext();
  const {count, increment, decrement} = useCounter(movie.id);
  const toggleVisibility = useTicketVisibilityToggleContext();

  useEffect(() => {
    if (shouldRemove) toggleVisibility();
  }, [count])

  return (
    <div className={styles.counter}>
      <button className={styles["count-change-btn"]} disabled={!count} onClick={decrement}>
        <div className={styles["img-container"]}>
          <Image
            src={"/minus.svg"}
            alt={"minus"}
            fill={true}
          />
        </div>
      </button>
      <span>
        {count}
      </span>
      <button className={styles["count-change-btn"]} disabled={count === 30} onClick={increment}>
        <div className={styles["img-container"]}>
          <Image
            src={"/plus.svg"}
            alt={"plus"}
            fill={true}
          />
        </div>
      </button>
    </div>
  )
}