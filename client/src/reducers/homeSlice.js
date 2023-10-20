import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,

  manufacturer: "",
  model: "",
  productionYear: "",
  color: "",
  category: "",
  leatherInterior: 0,
  fuelType: "",
  gearBoxType: "",
  driveWheel: "",
  wheel: "",
  volume: 0.0,
  levy: 0,
  cylinders: 0,
  doors: 0,
  airbags: 0,
  predictedPrice: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    next: (state) => {
      state.value += 1;
    },
    back: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    setManufacturer: (state, action) => {
      state.manufacturer = action.payload;
    },
    setModel: (state, action) => {
      state.model = action.payload;
    },
    setProductionYear: (state, action) => {
      state.productionYear = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setLeatherInterior: (state, action) => {
      state.leatherInterior = action.payload;
    },
    setFuelType: (state, action) => {
      state.fuelType = action.payload;
    },
    setGearBoxType: (state, action) => {
      state.gearBoxType = action.payload;
    },
    setDriveWheel: (state, action) => {
      state.driveWheel = action.payload;
    },
    setWheel: (state, action) => {
      state.wheel = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setLevy: (state, action) => {
      state.levy = action.payload;
    },
    setCylinders: (state, action) => {
      state.cylinders = action.payload;
    },
    setDoors: (state, action) => {
      state.doors = action.payload;
    },
    setAirbags: (state, action) => {
      state.airbags = action.payload;
    },
    setPredictedPrice: (state, action) => {
      state.predictedPrice = action.payload;
    },
  },
});

export const {
  next,
  back,
  reset,
  setManufacturer,
  setIsManufacturerSelected,
  setModel,
  setProductionYear,
  setColor,
  setCategory,
  setLeatherInterior,
  setFuelType,
  setGearBoxType,
  setDriveWheel,
  setWheel,
  setVolume,
  setLevy,
  setCylinders,
  setDoors,
  setAirbags,
  setPredictedPrice,
} = homeSlice.actions;

export default homeSlice.reducer;
