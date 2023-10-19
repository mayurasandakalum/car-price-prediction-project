import React from "react";
import CategoryCard from "../categoryCard";
import { Grid } from "@mui/material";

const categories = [
  "Jeep",
  "Hatchback",
  "Sedan",
  "Microbus",
  "Goods wagon",
  "Universal",
  "Coupe",
  "Minivan",
  "Cabriolet",
  "Limousine",
  "Pickup",
];

const SelectCategory = () => {
  return (
    <Grid container spacing={2} xs={12} padding="30px 60px">
      {categories &&
        categories.map((category, index) => (
          <CategoryCard key={index} categoryName={category} />
        ))}
    </Grid>
  );
};

export default SelectCategory;
