import './App.css';

import { ThemeProvider } from '@emotion/react';

import { CssBaseline } from '@mui/material';


import { Navbar } from './components/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import Home from './components/Home/Home';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Navbar/>
      
      <Home/>
    </ThemeProvider>

  );
}

export default App;