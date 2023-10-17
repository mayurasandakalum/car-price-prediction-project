import { Grid } from "@mui/material";
import React from "react";
import CarCard from "../carCard";

const SelectManufacturer = ({ manufacturers }) => {
  return (
    <Grid container spacing={2} xs={12} padding="30px 60px">
      {manufacturers &&
        manufacturers.data.map((manufacturer, index) => (
          <CarCard
            key={index}
            name={manufacturer.name}
            logo={manufacturer.logo}
          />
        ))}
    </Grid>
  );
};

export default SelectManufacturer;
