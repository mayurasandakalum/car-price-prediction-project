import { Box, Slider, TextField, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMileage } from "../../../reducers/homeSlice";

// const PrettoSlider = styled(Slider)({
//   color: "#52af77",
//   height: 8,
//   "& .MuiSlider-track": {
//     border: "none",
//   },
//   "& .MuiSlider-thumb": {
//     height: 24,
//     width: 24,
//     backgroundColor: "#fff",
//     border: "2px solid currentColor",
//     "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
//       boxShadow: "inherit",
//     },
//     "&:before": {
//       display: "none",
//     },
//   },
//   "& .MuiSlider-valueLabel": {
//     lineHeight: 1.2,
//     fontSize: 18,
//     background: "unset",
//     padding: 0,
//     width: 60,
//     height: 60,
//     borderRadius: "50% 50% 50% 0",
//     backgroundColor: "#52af77",
//     transformOrigin: "bottom left",
//     transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
//     "&:before": { display: "none" },
//     "&.MuiSlider-valueLabelOpen": {
//       transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
//     },
//     "& > *": {
//       transform: "rotate(45deg)",
//     },
//   },
// });

const SelectMileage = () => {
  const dispatcher = useDispatch();
  const selectedMileage = useSelector((state) => state.home.mileage);

  const handleMileageChange = (event) => {
    if (event.target.value) {
      console.log("event.target.value:", parseFloat(event.target.value));
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
        sx={{
          width: "25%",
        }}
      />
    </Box>
  );
};

export default SelectMileage;
