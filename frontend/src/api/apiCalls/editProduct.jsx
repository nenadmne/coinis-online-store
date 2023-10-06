import api from "../api";

export default async function editProduct(slug, item) {
  try {
    const response = await api.put(`/products/admin/${slug}/`, JSON.stringify(item));
    return response.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw new Error("Failed edit product");
  }
}
