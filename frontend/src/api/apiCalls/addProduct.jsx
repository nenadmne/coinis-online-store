import api from "../api";

export default async function addProduct(item) {
  try {
    const response = await api.post(`/products/admin/`, JSON.stringify(item));
    return response.data;
  } catch (error) {
    console.error("Error posting product:", error);
    throw new Error("Failed to post product");
  }
}
