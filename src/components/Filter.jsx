// // src/components/Filter.jsx
// import React, { useState } from 'react';
// import { Box, Select, Input, Button, Text } from '@chakra-ui/react';

// const Filter = ({ filterProducts }) => {
//   const [category, setCategory] = useState('');
//   const [priceRange, setPriceRange] = useState([0, 1000]);

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     filterProducts(e.target.value, priceRange);
//   };

//   const handlePriceChange = (e) => {
//     const [minPrice, maxPrice] = e.target.value.split('-').map(Number);
//     setPriceRange([minPrice, maxPrice]);
//     filterProducts(category, [minPrice, maxPrice]);
//   };

//   return (
//     <Box mb="6">
//       <Text mb="2">Filter By:</Text>

//       <Select
//         placeholder="Select category"
//         onChange={handleCategoryChange}
//         mb="4"
//       >
//         <option value="Pain Relief">Pain Relief</option>
//         <option value="Antibiotics">Antibiotics</option>
//         <option value="Vitamins">Vitamins</option>
//         {/* Add more categories here */}
//       </Select>

//       <Input
//         type="text"
//         placeholder="Enter price range (e.g. 10-50)"
//         onChange={handlePriceChange}
//         mb="4"
//       />
//     </Box>
//   );
// };

// export default Filter;



import React, { useState } from 'react';
import { Box, Select, Input, Text } from '@chakra-ui/react';

const Filter = ({ filterProducts }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    filterProducts(e.target.value, priceRange);
  };

  const handlePriceChange = (e) => {
    const [minPrice, maxPrice] = e.target.value.split('-').map(Number);
    setPriceRange([minPrice, maxPrice]);
    filterProducts(category, [minPrice, maxPrice]);
  };

  return (
    <Box mb="6">
      <Text mb="2">Filter By:</Text>
      <Select placeholder="Select category" onChange={handleCategoryChange} mb="4">
        <option value="Pain Relief">Pain Relief</option>
        <option value="Antibiotics">Antibiotics</option>
        <option value="Vitamins">Vitamins</option>
      </Select>
      <Input type="text" placeholder="Enter price range (e.g. 10-50)" onChange={handlePriceChange} mb="4" />
    </Box>
  );
};

export default Filter;