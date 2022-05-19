import { useState, useTransition } from 'react'
import { generatePosts } from './utils/data';
import Posts from './components/Posts';

import './App.css'

const dummyPosts = generatePosts();

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredPosts = filterPosts(filterTerm);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>REACT 18</div>
        <input type="text" placeholder="Search content" onChange={(event) => updateFilterHandler(event, setFilterTerm, startTransition)} />
        {/* {isPending && <p style={{color: 'white'}}>Updating List...</p>} */}
        <Posts filteredPosts={filteredPosts}/>
      </header>

    </div>
  )
}

const filterPosts = (filterTerm) => {
  if (!filterTerm) {
    return dummyPosts;
  }
  return dummyPosts.filter((product) => product.body.includes(filterTerm));
}

const updateFilterHandler = (event, setFilterTerm, startTransition) => {
  console.log(`Letter clicked: ${event.target.value}`);

  // startTransition(() => {
    setFilterTerm(event.target.value);
  // });
}

export default App
