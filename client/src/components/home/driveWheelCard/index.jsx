import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDriveWheel } from "../../../reducers/homeSlice";

const DriveWheelCard = ({ driveWheel }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatcher = useDispatch();

  const selectedDriveWheel = useSelector((state) => state.home.driveWheel);

  const containerStyle = {
    height: "250px",
    borderRadius: "20px",
    backgroundColor: "white",
    border: selectedDriveWheel === driveWheel ? "3px solid #012148" : "none",
    boxShadow: isHovered ? "0px 10px 20px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "box-shadow 0.3s",
  };

  const handleDriveWheelSelect = () => {
    if (selectedDriveWheel === driveWheel) {
      dispatcher(setDriveWheel(""));
      return;
    } else {
      dispatcher(setDriveWheel(driveWheel));
    }
  };

  //   useEffect(() => {
  //     console.log("selectedDriveWheel:", selectedDriveWheel);
  //   }, [selectedDriveWheel]);

  return (
    <Grid container item xs={3} direction="column" borderRadius="20px">
      <Grid
        container
        item
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleDriveWheelSelect}
        style={containerStyle}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          item
          width="100%"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
            {driveWheel}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DriveWheelCard;
