// import axios from "axios";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export const getAllNotices = async () => {
//   try {
//     const res = await axios.get(`${API_URL}/notice`, {
//       withCredentials: true,
//     });
//     return res.data; 
//   } catch (err) {
//     throw err.response?.data || { message: "Failed to fetch notices" };
//   }
// };





import apiClient from "../apiClient";

export const getAllNotices = async () => {
  const res = await apiClient.get("/notice");
  return res.data;
};
