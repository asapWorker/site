"use client";

import styles from "./main-page.module.css";
import { FilmsCartsList } from "./films-carts-list";

export default function Home() {
  return (
    <section className={styles.films}>
      <FilmsCartsList/>
    </section>
  )
}
