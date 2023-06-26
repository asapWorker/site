"use client"

import { FunctionComponent, createContext, useContext } from "react";

const TicketVisibilityContext = createContext<boolean>(false);

export function useTicketVisibility() {
  return useContext(TicketVisibilityContext);
}

interface TicketVisibilityProviderProps {
  isVisible: boolean,
  children: React.ReactNode
}

export const MovieContextProvider: FunctionComponent<TicketVisibilityProviderProps> = ({
  isVisible,
  children
}) => {
  return <TicketVisibilityContext.Provider value={isVisible}>
    {children}
  </TicketVisibilityContext.Provider>
}