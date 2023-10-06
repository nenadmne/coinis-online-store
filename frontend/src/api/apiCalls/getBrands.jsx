import api from "../api";

export default async function getBrands() {
  try {
    const response = await api.get(`/products/brands`);
    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw new Error("Failed to fetch brands");
  }
}
