import { Grid } from "@mui/material";
import React from "react";
import FormSteps from "../formSteps";

const LeftSide = () => {
  return (
    <Grid container height="100%" justifyContent="center" alignContent="center">
      <Grid item>
        <FormSteps />
      </Grid>
    </Grid>
  );
};

export default LeftSide;
