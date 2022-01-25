import React from 'react';
import { useState, createContext } from 'react';

const defaultState = {
  state: {
    currentUser: {
      uid: '',
      email: '',
    },
  },
  setState: (_state) => {},
};

export const AppContext = createContext(defaultState);

export function AppContextProvider({ children }) {
  const [state, setState] = useState(defaultState.state);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}
