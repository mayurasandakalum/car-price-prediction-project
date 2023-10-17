import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setManufacturer } from "../../../reducers/homeSlice";

const CarCard = ({ name, logo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatcher = useDispatch();

  const selectedManufacturer = useSelector((state) => state.home.manufacturer);

  const containerStyle = {
    height: "280px",
    borderRadius: "20px",
    backgroundColor: "white",
    border: selectedManufacturer === name ? "3px solid blue" : "none",
    boxShadow: isHovered ? "0px 10px 20px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "box-shadow 0.3s",
  };

  const handleManufacturerSelect = () => {
    if (selectedManufacturer === name) {
      dispatcher(setManufacturer(""));
      return;
    } else {
      dispatcher(setManufacturer(name));
    }
  };

  return (
    <Grid container item xs={3} direction="column" borderRadius="20px">
      <Grid
        container
        item
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleManufacturerSelect}
        style={containerStyle}
      >
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          height="85%"
          padding="25px"
          borderRadius="20px"
        >
          <Box
            height="100%"
            width="100%"
            bgcolor="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="15px"
          >
            <img src={logo} alt={name} loading="lazy" width="200px" />
          </Box>
        </Grid>
        <Grid container item height="15%" px="25px">
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            {name}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarCard;
