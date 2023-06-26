"use client"

import { FunctionComponent, createContext, useContext } from "react";

const TicketToggleContext = createContext(() => {});

export function useTicketVisibilityToggleContext() {
  return useContext(TicketToggleContext);
}

interface VisibilityToggleProviderProps {
  toggleVisibility: () => void,
  children: React.ReactNode
}

export const TicketToggleProvider: FunctionComponent<VisibilityToggleProviderProps> = ({
  toggleVisibility,
  children
}) => {
  return <TicketToggleContext.Provider value={toggleVisibility}>
    {children}
  </TicketToggleContext.Provider>
}
