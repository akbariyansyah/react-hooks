import React from 'react';
import './App.css';
import FunctionContextComponent from './components/FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

export const ThemeContext = React.createContext(false)

export default function App() {


  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
