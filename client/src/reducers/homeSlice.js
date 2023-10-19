import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  manufacturer: "",
  model: "",
  productionYear: "",
  color: "",
  category: "",
  leatherInterior: false,
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
} = homeSlice.actions;

export default homeSlice.reducer;
