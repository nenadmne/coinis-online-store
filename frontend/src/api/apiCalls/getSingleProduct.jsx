import api from "../api";

export default async function getSingleProduct(slug) {
    try {
      const response = await api.get(slug);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }