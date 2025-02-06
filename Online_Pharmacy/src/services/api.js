// src/services/api.js
// Function to fetch products from the Firebase Realtime Database
export const getProducts = async () => {
    try {
      // Fetch data from Firebase
      const response = await fetch('https://onlinepharmacy-cb0e3-default-rtdb.firebaseio.com/Medicine.json');
      
      // If the response is not OK, throw an error
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const data = await response.json();
      console.log("Fetched data:", data); // Log the raw data
  
      const products = Object.keys(data).map((key) => ({
        id: key,
        name: data[key].name,
        category: data[key].category,
        brand: data[key].brand,
        description: data[key].description,
        price: data[key].price,
        discount: data[key].discount,
        stock: data[key].stock,
        image: data[key].imageUrl,
        ratings: data[key].ratings,
        prescriptionRequired: data[key].prescriptionRequired,
      }));
  
      console.log("Mapped products:", products); // Log the mapped products
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };