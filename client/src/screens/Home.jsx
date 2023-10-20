import React from "react";
import Grid from "@mui/material/Grid";
import LeftSide from "../components/home/leftSide";
import RightSide from "../components/home/rightSide";

const Home = () => {
  return (
    <Grid container height="100%">
      <Grid item xs={4} bgcolor="rgb(84, 88, 113)">
        <LeftSide />
      </Grid>
      <Grid item xs={8} bgcolor="rgba(213, 208, 207)">
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default Home;
