"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectTicketAmount } from "@/redux/features/cart/selector";
import { RootState } from "@/redux/store";
import { cartActions } from "@/redux/features/cart";

export const useCounter = (
  id: string
) => {
  const ticketAmount = useSelector((state: RootState) => selectTicketAmount(state, id));
  const dispatch = useDispatch();
  
  const increment = () => dispatch(cartActions.increment(id));

  const decrement = () => dispatch(cartActions.decrement(id));

  return {count: ticketAmount, increment, decrement};
}