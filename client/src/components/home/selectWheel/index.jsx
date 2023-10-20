import React from "react";
import { Grid } from "@mui/material";
import WheelCard from "../wheelCard";

const wheels = ["Left wheel", "Right-hand drive"];

const SelectWheel = () => {
  return (
    <Grid container spacing={2} xs={12} padding="30px 60px">
      {wheels &&
        wheels.map((wheel, index) => <WheelCard key={index} wheel={wheel} />)}
    </Grid>
  );
};

export default SelectWheel;
