import React from 'react';
import { Input, Box } from '@chakra-ui/react';

const SearchBar = ({ searchProducts }) => {
  const handleSearchChange = (e) => {
    searchProducts(e.target.value);
  };

  return (
    <Box mb="6">
      <Input
        type="text"
        placeholder="Search for products by name or ID"
        onChange={handleSearchChange}
      />
    </Box>
  );
};

export default SearchBar;