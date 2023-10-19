import React from "react";
import { Grid } from "@mui/material";
import FuelCard from "../fuelCard";

const fuelTypes = [
  "Hybrid",
  "Petrol",
  "Diesel",
  "CNG",
  "Plug-in Hybrid",
  "LPG",
];

const SelectFuelType = () => {
  return (
    <Grid container spacing={2} xs={12} padding="30px 60px">
      {fuelTypes &&
        fuelTypes.map((fuelType, index) => (
          <FuelCard key={index} fuelType={fuelType} />
        ))}
    </Grid>
  );
};

export default SelectFuelType;
