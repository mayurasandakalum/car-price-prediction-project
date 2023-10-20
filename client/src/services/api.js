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

export const getColors = async (manufacturer) => {
  try {
    const response = await api.get(`/api/colors/${manufacturer}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const predictCarPrice = async (data) => {
  try {
    const response = await api.post("/api/predict-car-price", data);
    const predictedPrice = response.data;
    return predictedPrice;
  } catch (error) {
    throw error;
  }
};
