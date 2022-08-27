

import React from 'react';

import { ThemeProvider } from './theme'

const AppProvider: React.FC<any> = ({ children }) => {
  return <ThemeProvider>
    {children}
  </ThemeProvider>
}

export default AppProvider;