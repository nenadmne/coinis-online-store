import api from "../api";

export default async function searchProduct(value) {
  try {
    const response = await api.get(`search/?searched=${value}`);
    return response.data;
  } catch (error) {
    console.error("Error searching product:", error);
    throw new Error("Failed search product");
  }
}
