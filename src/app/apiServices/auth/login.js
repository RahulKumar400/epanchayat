import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/users/login`, credentials, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Login failed" };
  }
};
