import axios from "axios";

export default axios.create({
  baseURL: "https://pylosh00.pythonanywhere.com",
  headers: {
    "Content-Type": "application/json",
  },
});
