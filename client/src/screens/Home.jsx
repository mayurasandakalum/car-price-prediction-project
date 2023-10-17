import React from "react";
import Grid from "@mui/material/Grid";
import LeftSide from "../components/home/leftSide";
import RightSide from "../components/home/rightSide";

const Home = () => {
  return (
    <Grid container height="100%">
      <Grid item xs={4} bgcolor="rgb(255, 202, 204)">
        <LeftSide />
      </Grid>
      <Grid item xs={8} bgcolor="rgba(158, 215, 250, 1)">
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default Home;
