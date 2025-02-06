import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Box border="1px solid #ddd" p="4" borderRadius="8" boxShadow="md">
      <Image src={product.imageUrl} alt={product.name} boxSize="200px" />
      <Text fontWeight="bold" mt="2">{product.name}</Text>
      <Text>{product.description}</Text>
      <Text color="gray.500">Category: {product.category}</Text>
      <Text fontSize="xl" color="green.500">${product.price}</Text>
      <Text>Stock: {product.stock}</Text>
      <Button onClick={() => addToCart(product)} mt="2" colorScheme="teal">Add to Cart</Button>
    </Box>
  );
};

export default ProductCard;