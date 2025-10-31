// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export const applyForScheme = async (formData) => {
//   try {
//     const res = await axios.post(`${API_URL}/scheme`, formData, {
//       withCredentials: true,
//       headers: { "Content-Type": "application/json" },
//     });
//     return res.data;
//   } catch (err) {
//     throw err.response?.data || { message: "Failed to apply for scheme" };
//   }
// };

// export const getSchemes = async () => {
//   try {
//     const res = await axios.get(`${API_URL}/scheme`, {
//       withCredentials: true,
//     });
//     return res.data;
//   } catch (err) {
//     throw err.response?.data || { message: "Failed to fetch schemes" };
//   }
// };





import apiClient from "../apiClient";

export const getSchemes = async () => {
  const res = await apiClient.get("/scheme");
  return res.data.data;
};

export const applyForScheme = async (formData) => {
  const res = await apiClient.post("/scheme", formData);
  return res.data;
};
