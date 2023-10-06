import api from "../api";

export default async function deleteProduct(slug) {
  try {
    const response = await api.delete(`/products/admin/${slug}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed delete product");
  }
}
