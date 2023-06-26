"use client";

import styles from "./basket.module.css";
import Image from "next/image";
import { selectCartItemsAmount } from "@/redux/features/cart/selector";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const Basket = () => {
  const ticketsAmount = useSelector((state: RootState) =>
    selectCartItemsAmount(state)
  );
  return (
    <div className={styles["basket-container"]}>
      {Boolean(ticketsAmount) && (
        <div className={styles["tickets-amount"]}>
          <span className={styles["tickets-amount-inner"]}>
            {ticketsAmount}
          </span>
        </div>
      )}
      <span className={styles["img-container"]}>
        <Image src={"/basket.svg"} alt={"basket"} fill={true} />
      </span>
    </div>
  );
};
