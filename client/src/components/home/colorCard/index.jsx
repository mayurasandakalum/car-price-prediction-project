import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../../../reducers/homeSlice";

const ColorCard = ({ colorName, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatcher = useDispatch();

  const selectedColor = useSelector((state) => state.home.color);

  const containerStyle = {
    height: "250px",
    width: "250px",
    borderRadius: "25px",
    backgroundColor: "white",
    border: selectedColor === colorName ? "5px solid blue" : "none",
    boxShadow: isHovered ? "0px 10px 20px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "box-shadow 0.3s",
  };

  const handleManufacturerSelect = () => {
    if (selectedColor === colorName) {
      dispatcher(setColor(""));
      return;
    } else {
      dispatcher(setColor(colorName));
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
        {/* <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          height="85%"
          //   padding="25px"
          borderRadius="20px"
        > */}
        {/* <Box
            height="100%"
            width="100%"
            bgcolor="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="15px"
          > */}
        <img
          src={url}
          alt={colorName}
          loading="lazy"
          style={{ width: "100%", borderRadius: "20px" }}
        />
        {/* </Box> */}
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default ColorCard;
