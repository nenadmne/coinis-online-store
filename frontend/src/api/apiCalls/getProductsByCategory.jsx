import api from "../api";

export default async function getProductsByCategory(slug) {
  try {
    const response = await api.get(slug);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw new Error("Failed to fetch category");
  }
}
