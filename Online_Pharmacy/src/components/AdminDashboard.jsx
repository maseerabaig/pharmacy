import React, { useState } from 'react';
import { Input, Button, Box, FormLabel } from '@chakra-ui/react';

const AdminDashboard = ({ addNewProduct }) => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    brand: '',
    description: '',
    price: '',
    discount: '',
    stock: '',
    imageUrl: '',
    ratings: '',
    prescriptionRequired:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    addNewProduct(newProduct);
    setNewProduct({
      id: '',
      name: '',
      category: '',
      brand: '',
      description: '',
      price: '',
      discount: '',
      stock: '',
      imageUrl: '',
      ratings: '',
      prescriptionRequired:''

    });
  };

  return (
    <Box border="1px" borderRadius="md" p="4" boxShadow="md" bg="white">
      <FormLabel>Product id</FormLabel>
      <Input name="id" value={newProduct.id} onChange={handleInputChange} mb="2" />

      <FormLabel>Product Brand</FormLabel>
      <Input name="brand" value={newProduct.brand} onChange={handleInputChange} mb="2" />

      <FormLabel>Product Name</FormLabel>
      <Input name="name" value={newProduct.name} onChange={handleInputChange} mb="2" />

      <FormLabel>Price</FormLabel>
      <Input name="price" value={newProduct.price} onChange={handleInputChange} mb="2" />

      <FormLabel>Discount</FormLabel>
      <Input name="discount" value={newProduct.discount} onChange={handleInputChange} mb="2" />

      <FormLabel>Category</FormLabel>
      <Input name="category" value={newProduct.category} onChange={handleInputChange} mb="2" />

      <FormLabel>Description</FormLabel>
      <Input name="description" value={newProduct.description} onChange={handleInputChange} mb="2" />

      <FormLabel>Stock</FormLabel>
      <Input name="stock" value={newProduct.stock} onChange={handleInputChange} mb="2" />

      <FormLabel>Image URL</FormLabel>
      <Input name="imageUrl" value={newProduct.imageUrl} onChange={handleInputChange} mb="2" />

      <FormLabel>Prescription</FormLabel>
      <Input name="prescriptionRequired" value={newProduct.prescriptionRequired} onChange={handleInputChange} mb="2" />

      <FormLabel>Ratings</FormLabel>
      <Input name="ratings" value={newProduct.ratings} onChange={handleInputChange} mb="2" />

      <Button colorScheme="teal" onClick={handleSubmit}>Add Product</Button>
    </Box>
  );
};

export default AdminDashboard;