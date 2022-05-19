import { useState } from 'react'
import { generateProducts } from './utils/data';
import ProductList from './components/ProductList';

import './App.css'

const dummyProducts = generateProducts();

function App() {
  const [selectedPerson, setSelectedPerson] = useState('');

  const filteredProducts = filterProducts(selectedPerson);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>REACT 18</div>
        <div>Person Selected: {selectedPerson}</div>
        <div>
          <button className={selectedPerson === 'Alice' ? 'active' : ''} onClick={() => handleClick('Alice', setSelectedPerson)}>Alice</button>
          <button className={selectedPerson === 'Bob' ? 'active' : ''} onClick={() => handleClick('Bob', setSelectedPerson)}>Bob</button>
        </div>
        <ProductList products={filteredProducts} />
      </header>

    </div>
  )
}

const filterProducts = (filterTerm) => {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.author.includes(filterTerm));
}

const handleClick = (name, setSelectedPerson) => {
  console.log(`Clicked ${name}`);
  setSelectedPerson(name);
}

export default App
