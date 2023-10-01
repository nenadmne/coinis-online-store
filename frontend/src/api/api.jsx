import axios from "axios";

export default axios.create({
  baseURL: "https://pylosh00.pythonanywhere.com/products/",
  headers: {
    "Content-Type": "application/json",
  },
});
