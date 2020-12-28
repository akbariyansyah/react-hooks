import './App.css';
import useLocalStorage from './customHooks/useLocalStorage';
import useLogger from './customHooks/useLogger';

export default function App() {
  const [name, setName] = useLocalStorage('name', '')
  useLogger(name)
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </>
  );
}
