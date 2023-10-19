import React from "react";
import { Grid } from "@mui/material";
import GearBoxCard from "../gearBoxCard";

const gearBoxes = ["Automatic", "Tiptronic", "Variator", "Manual"];

const SelectGearBoxType = () => {
  return (
    <Grid container spacing={2} xs={12} padding="30px 60px">
      {gearBoxes &&
        gearBoxes.map((gearBox, index) => (
          <GearBoxCard key={index} gearBoxType={gearBox} />
        ))}
      vf
    </Grid>
  );
};

export default SelectGearBoxType;
