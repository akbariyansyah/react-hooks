import { useCallback, useState } from 'react';
import './App.css';
import List from './List';

export default function App() {
  const [dark, setDark] = useState(false)
  const [number, setNumber] = useState(0)
  const getItems = useCallback((inc: number) => {
    return [number + inc, number + 1 + inc, number + 2 + inc]
  }, [number])

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333"
  }

  return (
    <div>
      <input type="number" style={theme} value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prev => !prev)}>Toggle Button</button>
      <List getItems={getItems} />
    </div>
  );
}
