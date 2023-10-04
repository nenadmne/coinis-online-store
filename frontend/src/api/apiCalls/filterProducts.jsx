import api from "../api";

export default async function filterProduct(minValue, maxValue, order) {
  try {
    const response = await api.get(
      `filter/?low=${minValue}&high=${maxValue}&ordered=${order}`
    );
    return response.data;
  } catch (error) {
    console.error("Error filtering product:", error);
    throw new Error("Failed filter product");
  }
}
