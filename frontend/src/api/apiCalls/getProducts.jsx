import api from "../api";

export default async function getProducts() {
  try {
    const response = await api.get();
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}


