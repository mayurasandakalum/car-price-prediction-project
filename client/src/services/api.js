import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getManufacturers = async () => {
  try {
    const response = await api.get("/api/manufacturers");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getModels = async (manufacturer) => {
  try {
    const response = await api.get(`/api/models/${manufacturer}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
