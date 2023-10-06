import api from "../api";

export default async function signUp(data) {
  try {
    const response = await api.post(`/signup/`, JSON.stringify(data));
    return response.data;
  } catch (error) {
    console.error("Error searching product:", error);
    throw new Error("Failed search product");
  }
}
