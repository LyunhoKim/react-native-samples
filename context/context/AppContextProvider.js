import React, { useState } from 'react';
import AppContext from './AppContext';

const AppContextProvider = ({ children }) => {
  const increase = () => {
    setNumber(number => {
      return {
        ...number,
        value: number.value + 1,
      };
    });
  };
  const decrease = () => {
    setNumber(number => {
      return {
        ...number,
        value: number.value - 1,
      };
    });
  };

  const initialState = {
    value: 0,
    increase,
    decrease,
  };
  const [number, setNumber] = useState(initialState);
  return <AppContext.Provider value={number}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
