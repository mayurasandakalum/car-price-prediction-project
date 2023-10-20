import { Box, Slider, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAirbags } from "../../../reducers/homeSlice";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 18,
    background: "unset",
    padding: 0,
    width: 60,
    height: 60,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const SelectAirbags = () => {
  const dispatcher = useDispatch();
  const selectedAirbags = useSelector((state) => state.home.volume);

  const handleAirbagsChange = (event, newValue) => {
    dispatcher(setAirbags(newValue));
  };

  // useEffect(() => {
  //   console.log("selectedAirbags:", selectedAirbags);
  // }, [selectedAirbags]);

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
      <PrettoSlider
        sx={{ width: "50%" }}
        max={16}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleAirbagsChange}
      />
    </Box>
  );
};

export default SelectAirbags;