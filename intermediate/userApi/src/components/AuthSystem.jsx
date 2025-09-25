import { useState, useEffect, createContext, useContext } from "react";

export const CardsContext = createContext();

export function CardsContextProvider({children}) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <CardsContext.Provider value={{cards, setCards, loading, setLoading}}>
      {children}
    </CardsContext.Provider>
  );
}