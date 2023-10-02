import api from "../api";

export default async function editProduct(slug, item) {
  console.log(slug)
  try {
    const response = await api.put(`admin/${slug}/`, JSON.stringify(item));
    return response.data;
  } catch (error) {
    console.error("Error editing product:", error);
    throw new Error("Failed dedit product");
  }
}
