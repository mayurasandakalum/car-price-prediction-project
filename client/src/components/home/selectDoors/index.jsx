import React from "react";
import { Grid } from "@mui/material";
import DoorCard from "../doorCard";

const doors = ["02-mar", "04-may", ">5"];

const SelectDoors = () => {
  return (
    <Grid container spacing={2} xs={12} padding="30px 60px">
      {doors &&
        doors.map((door, index) => <DoorCard key={index} door={door} />)}
    </Grid>
  );
};

export default SelectDoors;
