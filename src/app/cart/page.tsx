"use client";

import { useSelector } from "react-redux";
import styles from "./cart-page.module.css";
import classNames from "classnames";
import { selectCartItemsAmount } from "@/redux/features/cart/selector";
import { RootState } from "@/redux/store";
import { CartList } from "./cart-list";

export default function Cart() {
  const ticketsAmount = useSelector((state: RootState) => selectCartItemsAmount(state));

  return <>
    <CartList/>

    <div className={classNames("block", styles.summary)}>
      <h3>Итого билетов:</h3>
      <h3 className={styles.sum}>{ticketsAmount}</h3>
    </div>
  </>
}