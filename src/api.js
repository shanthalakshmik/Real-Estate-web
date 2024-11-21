import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Update with your backend server URL
});

// Add an authorization token (if needed)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
