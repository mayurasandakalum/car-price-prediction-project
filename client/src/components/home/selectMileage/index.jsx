import { Box, Slider, TextField, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMileage } from "../../../reducers/homeSlice";

const SelectMileage = () => {
  const dispatcher = useDispatch();
  const selectedMileage = useSelector((state) => state.home.mileage);

  const handleMileageChange = (event) => {
    if (event.target.value) {
      dispatcher(setMileage(parseFloat(event.target.value)));
    }
  };

  useEffect(() => {
    console.log("selectedMileage:", selectedMileage);
  }, [selectedMileage]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <TextField
        label="Enter Mileage"
        variant="outlined"
        onChange={handleMileageChange}
        value={selectedMileage}
        sx={{
          width: "25%",
        }}
      />
    </Box>
  );
};

export default SelectMileage;
