import { createContext } from 'react';

const AppContext = createContext({
  value: 0,
  increase: () => {},
  decrease: () => {},
});

export default AppContext;
