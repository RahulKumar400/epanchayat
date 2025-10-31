import axios from "axios";

// ✅ Base axios instance
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // your backend URL
  withCredentials: true, // send cookies if needed
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Optional: global error interceptor (for better debugging)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || "Something went wrong with API request";
    return Promise.reject({ ...error, message });
  }
);

export default apiClient;
