import { useState } from 'react'
import './App.css'

function App() {
  console.log('COMPONENT UPDATED');
  const [count, setCount] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState('');

  const handleBatchClick = () => {
    setCount(count => count + 1);
    setSelectedPerson('Alice');
  }

  const handleSeparateClick = () => {
    setTimeout(() => {
      setCount(count => count + 1);
      setSelectedPerson('Bob');
    }, 100);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Total # clicks: {count} </div>
        <div>Person Selected: {selectedPerson}</div>
        <button onClick={handleBatchClick}>Alice (Batched)</button>
        <button onClick={handleSeparateClick}>Bob (Unbatched)</button>
      </header>

    </div>
  )
}

export default App
