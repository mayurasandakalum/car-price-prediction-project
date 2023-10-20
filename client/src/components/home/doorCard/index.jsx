import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDoors } from "../../../reducers/homeSlice";

const DoorCard = ({ door }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatcher = useDispatch();

  const selectedDoor = useSelector((state) => state.home.doors);

  const containerStyle = {
    height: "280px",
    borderRadius: "20px",
    backgroundColor: "white",
    border: selectedDoor === door ? "3px solid blue" : "none",
    boxShadow: isHovered ? "0px 10px 20px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "box-shadow 0.3s",
  };

  const handleDoorSelect = () => {
    if (selectedDoor === door) {
      dispatcher(setDoors(""));
      return;
    } else {
      dispatcher(setDoors(door));
    }
  };

  //   useEffect(() => {
  //     console.log("selectedDoor:", selectedDoor);
  //   }, [selectedDoor]);

  return (
    <Grid container item xs={3} direction="column" borderRadius="20px">
      <Grid
        container
        item
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleDoorSelect}
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
            {door}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DoorCard;
