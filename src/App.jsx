import  { useState, useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import ProductList from './components/ProductList';

import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import AdminDashboard from './components/AdminDashboard';
import CartPreview from './components/CartPreview';
import { getProducts, addProduct } from './services/api'; // Assuming addProduct is your API method


function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await getProducts();
      setProducts(productData);
      setFilteredProducts(productData);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const searchProducts = (query) => {
    setSearchQuery(query);
    filterProducts(category, priceRange);
  };

  const filterProducts = (category, priceRange) => {
    let filtered = [...products];
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange;
      filtered = filtered.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };

  const addNewProduct = async (newProduct) => {
    try {
      // Call your API to add a new product
      await addProduct(newProduct); // Assuming you have an API call function to add product

      // Add new product to the local state (products list)
      setProducts((prevProducts) => [...prevProducts, newProduct]);

      console.log('New Product Added:', newProduct);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <ChakraProvider>
      <Box p="6" bg="red" w="20rem" h="20rem">
        <SearchBar searchProducts={searchProducts} />
        <Filter
          filterProducts={filterProducts}
          setCategory={setCategory}
          setPriceRange={setPriceRange}
        />
        <AdminDashboard addNewProduct={addNewProduct} />
        <ProductList addToCart={addToCart} products={filteredProducts} />
        <CartPreview cart={cart} />
      </Box>
    </ChakraProvider>
  );
}


export default App;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
