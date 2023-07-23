import React from 'react';
import IsraelPrimeVideo from './IsraelPrimeVideo';
import { MantineProvider } from '@mantine/core';
import './App.css';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <IsraelPrimeVideo />
    </MantineProvider>
  );
}

export default App;
