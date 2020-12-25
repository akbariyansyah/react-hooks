import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

export const ThemeContext = React.createContext(false)

export default function App() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themesStyles = useMemo(() => {
    return {
      backgroundColor: dark ? '#222' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])
  useEffect(() => {
    console.log('Theme changed')
  }, [themesStyles])

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
      <button onClick={() => setDark(prev => !prev)} >Change theme</button>
      <div style={themesStyles} >{doubleNumber}</div>
    </>
  );
}
function slowFunction(num: number): number {
  console.log('Starting slow function ')
  for (let i = 0; i < 1000000000; i++) { }
  return num * 2
}