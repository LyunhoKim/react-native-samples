import React from 'react';

import AppContextProvider from './context/AppContextProvider';
import Parent from './components/Parent';

const App = () => {
  return (
    <AppContextProvider>
      <Parent />
    </AppContextProvider>
  );
};

export default App;
