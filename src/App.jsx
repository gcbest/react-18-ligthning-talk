import { useState } from 'react'
import { generatePosts } from './utils/data';
import Posts from './components/Posts';

import './App.css'

const dummyPosts = generatePosts();
const ALICE = 'Alice';
const BOB = 'Bob';

function App() {
  const [selectedPerson, setSelectedPerson] = useState('');

  const filteredPosts = filterPosts(selectedPerson);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>REACT 18</div>
        <div>Person Selected: {selectedPerson}</div>
        <div>
          <button className={selectedPerson === ALICE ? 'active' : ''} onClick={() => handleClick(ALICE, selectedPerson, setSelectedPerson)}>{ALICE}</button>
          <button className={selectedPerson === BOB ? 'active' : ''} onClick={() => handleClick(BOB, selectedPerson, setSelectedPerson)}>{BOB}</button>
        </div>
        <Posts filteredPosts={filteredPosts}/>
      </header>

    </div>
  )
}

const filterPosts = (filterTerm) => {
  if (!filterTerm) {
    return dummyPosts;
  }
  return dummyPosts.filter((product) => product.author.includes(filterTerm));
}

const handleClick = (name, selectedPerson, setSelectedPerson) => {
  console.log(`Clicked ${name}`);
  if(name === selectedPerson) {
    setSelectedPerson('');
  } else {
    setSelectedPerson(name);
  }
}

export default App
