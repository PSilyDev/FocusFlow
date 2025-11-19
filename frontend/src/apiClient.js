// src/apiClient.js
import axios from "axios";

// Vite-style env name: VITE_API_BASE_URL
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false, // flip to true if you ever use cookies
});
