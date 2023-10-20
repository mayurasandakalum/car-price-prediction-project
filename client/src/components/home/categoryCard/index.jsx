import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../../reducers/homeSlice";

const CategoryCard = ({ categoryName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatcher = useDispatch();

  const selectedCategory = useSelector((state) => state.home.category);

  const containerStyle = {
    height: "200px",
    borderRadius: "20px",
    backgroundColor: "white",
    border: selectedCategory === categoryName ? "3px solid #012148" : "none",
    boxShadow: isHovered ? "0px 10px 20px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "box-shadow 0.3s",
  };

  const handleCategorySelect = () => {
    if (selectedCategory === categoryName) {
      dispatcher(setCategory(""));
      return;
    } else {
      dispatcher(setCategory(categoryName));
    }
  };

  return (
    <Grid container item xs={3} direction="column" borderRadius="20px">
      <Grid
        container
        item
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCategorySelect}
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
            {categoryName}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoryCard;
