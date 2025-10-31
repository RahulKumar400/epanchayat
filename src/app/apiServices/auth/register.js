import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const registerUser = async (formData) => {
  try {
    const res = await axios.post(`${API_URL}/users/register`, formData, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });

    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Registration failed" };
  }
};
