import { Grid } from "@mui/material";
import React from "react";
import LeftFormSteps from "../leftFormSteps";

const LeftSide = () => {
  return (
    <Grid container height="100%" justifyContent="center" alignContent="center">
      <Grid item>
        <LeftFormSteps />
      </Grid>
    </Grid>
  );
};

export default LeftSide;
