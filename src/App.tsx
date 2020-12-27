import React, { useEffect, useRef, useState } from 'react';
import './App.css';

export const ThemeContext = React.createContext(false)

export default function App() {

  const [name, setname] = useState('')
  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })
  return (
    <>
      <input type="text" onChange={e => setname(e.target.value)} />
      <p>Hei my name is {name}</p>
      <p>This component rendered {renderCount.current} times</p>
    </>
  );
}
