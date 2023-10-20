import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFuelType } from "../../../reducers/homeSlice";

const FuelCard = ({ fuelType }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatcher = useDispatch();

  const selectedFuelType = useSelector((state) => state.home.fuelType);

  const containerStyle = {
    height: "250px",
    height: "250px",
    borderRadius: "20px",
    backgroundColor: "white",
    border: selectedFuelType === fuelType ? "3px solid blue" : "none",
    boxShadow: isHovered ? "0px 10px 20px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "box-shadow 0.3s",
  };

  const handleFuelTypeSelect = () => {
    if (selectedFuelType === fuelType) {
      dispatcher(setFuelType(""));
      return;
    } else {
      dispatcher(setFuelType(fuelType));
    }
  };

  return (
    <Grid container item xs={3} direction="column" borderRadius="20px">
      <Grid
        container
        item
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleFuelTypeSelect}
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
            {fuelType}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FuelCard;
