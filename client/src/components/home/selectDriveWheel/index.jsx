import React from "react";
import { Grid } from "@mui/material";
import DriveWheelCard from "../driveWheelCard";

const driveWheels = ["4x4", "Front", "Rear"];

const SelectDriveWheel = () => {
  return (
    <Grid container spacing={2} xs={12} padding="30px 60px">
      {driveWheels &&
        driveWheels.map((driveWheel, index) => (
          <DriveWheelCard key={index} driveWheel={driveWheel} />
        ))}
    </Grid>
  );
};

export default SelectDriveWheel;
