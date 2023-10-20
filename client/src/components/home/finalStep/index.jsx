import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FinalStep = () => {
  const selectedManufacturer = useSelector((state) => state.home.manufacturer);
  const selectedModel = useSelector((state) => state.home.model);
  const selectedProductionYear = useSelector(
    (state) => state.home.productionYear
  );
  const selectedColor = useSelector((state) => state.home.color);
  const selectedCategory = useSelector((state) => state.home.category);
  const selectedLeatherInterior = useSelector(
    (state) => state.home.leatherInterior
  );
  const selectedFuelType = useSelector((state) => state.home.fuelType);
  const selectedGearBoxType = useSelector((state) => state.home.gearBoxType);
  const selectedDriveWheel = useSelector((state) => state.home.driveWheel);
  const selectedWheel = useSelector((state) => state.home.wheel);
  const selectedVolume = useSelector((state) => state.home.volume);
  const selectedLevy = useSelector((state) => state.home.levy);

  const handlePrediction = () => {
    const finalValues = {
      manufacturer: selectedManufacturer,
      model: selectedModel,
      productionYear: selectedProductionYear,
      color: selectedColor,
      category: selectedCategory,
      leatherInterior: selectedLeatherInterior,
      fuelType: selectedFuelType,
      gearBoxType: selectedGearBoxType,
      driveWheel: selectedDriveWheel,
      wheel: selectedWheel,
      volume: selectedVolume,
      levy: selectedLevy,
    };

    console.log("finalValues:", finalValues);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/predict">
        <Button variant="contained" disableElevation onClick={handlePrediction}>
          Start Prediction
        </Button>
      </Link>
    </Box>
  );
};

export default FinalStep;
