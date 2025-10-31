import apiClient from "../apiClient";

// ✅ Create new request
export const createRequest = async (data) => {
  const res = await apiClient.post("/request", data);
  return res.data;
};

// ✅ Get all user requests
export const getUserRequests = async () => {
  const res = await apiClient.get("/request");
  return res.data;
};
