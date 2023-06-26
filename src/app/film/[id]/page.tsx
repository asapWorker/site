"use client";

import styles from "./film-page.module.css";
import { useGetMovieQuery } from "@/redux/services/moviesApi";
import { Reviews } from "../reviews";
import { ImageWithPlaceholder } from "@/components/image-with-placeholder/image-with-placeholder";
import classNames from "classnames";

export default function Film({params}: {params: {id: string}}) {
  const {data, isLoading, error} = useGetMovieQuery(params.id);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <section className={"list"}>
      <section className={classNames("block", styles.film)}>
        <ImageWithPlaceholder
          imgUrl={data.posterUrl}
          imageWithPlaceholderClassName={styles.poster}
        />

        <div>
          <h2>{data.title}</h2>
          <div className={styles.chapter}>
            <span className={styles["chapter-name"]}>Жанр: </span>
            {data.genre}
          </div>
          <div className={styles.chapter}>
            <span className={styles["chapter-name"]}>Жанр: </span>
            {data.releaseYear}
          </div>
          <div className={styles.chapter}>
            <span className={styles["chapter-name"]}>Жанр: </span>
            {data.rating}
          </div>
          <div className={styles.chapter}>
            <span className={styles["chapter-name"]}>Жанр: </span>
            {data.director}
          </div>

          <div className={styles.description}>
            <div className={classNames(styles["chapter-name"], styles.chapter)}>Описание</div>
            <p className={styles.text}>{data.description}</p>
          </div>
        </div>
      </section>

      <Reviews movieId={params.id}/>
    </section>
  )
}