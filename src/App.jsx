import { useState } from 'react'
import './App.css'

function App() {
  console.log('COMPONENT UPDATED');
  const [count, setCount] = useState(0);

  const handleBatchClick = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  const handleSeparateClick = () => {
    setTimeout(() => {
      setCount(count => count + 1);
      setCount(count => count + 1);
    }, 100);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleBatchClick}>Batched Updates</button>
        <button onClick={handleSeparateClick}>Individual Updates</button>
      </header>

    </div>
  )
}

export default App
