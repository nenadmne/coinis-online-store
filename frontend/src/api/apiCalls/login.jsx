import api from "../api";

export default async function login(data) {
  try {
    const response = await api.post(`/token/`, JSON.stringify(data));
    return response.data;
  } catch (error) {
    console.error("Error searching product:", error);
    throw new Error("Failed search product");
  }
}
