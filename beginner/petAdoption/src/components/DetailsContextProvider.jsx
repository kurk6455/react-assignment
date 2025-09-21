import { createContext, useState } from 'react'

const DetailsContext = createContext();

function DetailsContextProvider({ children }) {
  const [details, setDetails] = useState([]);

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
}

export {
    DetailsContext,
    DetailsContextProvider
}