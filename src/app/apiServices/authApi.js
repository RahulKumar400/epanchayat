import apiClient from "./apiClient";
// ✅ Login user
export const loginUser = async (credentials) => {
  const res = await apiClient.post("/users/login", credentials);
  return res.data;
};


// ✅ Register user
export const registerUser = async (data) => {
  const res = await apiClient.post("/users/register", data);
  return res.data;
};