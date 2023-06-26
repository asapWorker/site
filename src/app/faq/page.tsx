"use client"

import classNames from "classnames";
import styles from "./faq-page.module.css";
import { QAItem } from "./qa-item/QAItem";

export default function Faq() {
  return (
    <>
      <h2 className={classNames("block", styles.title)}>
        Вопросы-ответы
      </h2>

      <section className={"list"}>
        <QAItem
          renderQuestion = {() => <h3>Что такое Билетопоиск?</h3>}
          renderAnswer = {(isOpen: boolean) => (isOpen) ? <p>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
            фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
            видео и интересные факты, поставить фильмам оценки, написать
            рецензии и дополнить описание фильмов.</p> : null}
        />

        <QAItem
          renderQuestion = {() => <h3>Какой компании принадлежит Билетопоиск?</h3>}
          renderAnswer = {(isOpen: boolean) => (isOpen) ? <p>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
            фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
            видео и интересные факты, поставить фильмам оценки, написать
            рецензии и дополнить описание фильмов.</p> : null}
        />

        <QAItem
          renderQuestion = {() => <h3>Как купить билет на Билетопоиск?</h3>}
          renderAnswer = {(isOpen: boolean) => (isOpen) ? <p>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
            фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
            видео и интересные факты, поставить фильмам оценки, написать
            рецензии и дополнить описание фильмов.</p> : null}
        />

        <QAItem
          renderQuestion = {() => <h3>Как оставить отзыв на Билетопоиск?</h3>}
          renderAnswer = {(isOpen: boolean) => (isOpen) ? <p>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
            фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
            видео и интересные факты, поставить фильмам оценки, написать
            рецензии и дополнить описание фильмов.</p> : null}
        />
      </section>
    </>
  );
}
