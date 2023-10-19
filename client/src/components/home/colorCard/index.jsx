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

  const handleColorSelect = () => {
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
        onClick={handleColorSelect}
        style={containerStyle}
      >
        <img
          src={url}
          alt={colorName}
          loading="lazy"
          style={{ width: "100%", borderRadius: "20px" }}
        />
      </Grid>
    </Grid>
  );
};

export default ColorCard;
