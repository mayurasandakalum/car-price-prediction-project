import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  manufacturer: "",
  model: "",
  productionYear: "",
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

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
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
} = homeSlice.actions;

export default homeSlice.reducer;
