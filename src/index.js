import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CSSReset, ChakraProvider,extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Add any custom theme configurations if needed
  backgroundColor:"white"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <CSSReset />
      <App />
    </React.StrictMode>
  </ChakraProvider >
);

