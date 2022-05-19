// import { useDeferredValue } from 'react';

function ProductList({ products }) {
    // const deferredProducts = useDeferredValue(products);
    return (
      <ul>
        {/* {deferredProducts.map((product) => ( */}
        {products.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>{product.author}</div>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ProductList;