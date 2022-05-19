export const generateProducts = () => {
    const products = [];
    for (let i = 0; i < 10000; i++) {
      products.push({id: i, name: `Product ${i+1}`, author: i % 2 === 0 ? 'Alice' : 'Bob'});
    }
    return products;
  }