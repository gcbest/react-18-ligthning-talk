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
        <div>REACT 18</div>
        <div>Total # clicks: {count} </div>
        <div>Person Selected: {selectedPerson}</div>
        <div>
          <button className={selectedPerson === 'Alice' ? 'active' : ''} onClick={handleBatchClick}>Alice (Batched)</button>
          <button className={selectedPerson === 'Bob' ? 'active' : ''} onClick={handleSeparateClick}>Bob (Batched Also)</button>
        </div>
      </header>

    </div>
  )
}

export default App
