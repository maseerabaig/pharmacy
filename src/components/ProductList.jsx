import React, { useState, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { getProducts } from '../services/api';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products);
      setFilteredProducts(products);
    };
    fetchData();
  }, []);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
