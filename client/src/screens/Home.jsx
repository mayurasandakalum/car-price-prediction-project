import React from "react";
import Grid from "@mui/material/Grid";
import LeftSide from "../components/home/leftSide";
import RightSide from "../components/home/rightSide";

const Home = () => {
  return (
    <Grid container height="100%">
      <Grid item xs={5}>
        <LeftSide />
      </Grid>
      <Grid item xs={7}>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default Home;
