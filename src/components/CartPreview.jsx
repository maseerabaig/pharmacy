import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CartPreview = ({ cart }) => {
  return (
    <Box mt="6">
      <Text fontSize="xl" mb="4">Your Cart:</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <Box>
          {cart.map((product, index) => (
            <Box key={index} mb="4">
              <Text>{product.name} - ${product.price}</Text>
            </Box>
          ))}
          <Button colorScheme="teal">Proceed to Checkout</Button>
        </Box>
      )}
    </Box>
  );
};

export default CartPreview;
