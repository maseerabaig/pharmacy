// src/services/api.js

// Function to fetch products from the Firebase Realtime Database
export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://onlinepharmacy-cb0e3-default-rtdb.firebaseio.com/Medicine.json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    console.log("Fetched data:", data);

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

    console.log("Mapped products:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Function to add a new product to Firebase
export const addProduct = async (newProduct) => {
  try {
    const response = await fetch(
      "https://onlinepharmacy-cb0e3-default-rtdb.firebaseio.com/Medicine.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    const data = await response.json();
    console.log("Product added:", data); // Log the response from Firebase

    return data;
  } catch (error) {
    console.error("Error adding product:", error);
  }
};
