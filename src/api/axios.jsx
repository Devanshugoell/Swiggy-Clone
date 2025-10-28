import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1", // 🔹 change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
