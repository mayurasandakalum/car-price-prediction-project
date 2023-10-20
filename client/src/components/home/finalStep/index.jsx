import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { predictCarPrice } from "../../../services/api";
import { setPredictedPrice } from "../../../reducers/homeSlice";

const FinalStep = () => {
  // const [predictedPrice, setPredictedPrice] = useState();
  const dispatcher = useDispatch();

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
  const selectedCylinders = useSelector((state) => state.home.cylinders);
  const selectedDoors = useSelector((state) => state.home.doors);
  const selectedAirbags = useSelector((state) => state.home.airbags);

  const predictedPrice = useSelector((state) => state.home.predictedPrice);

  const handlePrediction = async () => {
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
      cylinders: selectedCylinders,
      doors: selectedDoors,
      airbags: selectedAirbags,
    };

    console.log("finalValues:", finalValues);

    try {
      const price = await predictCarPrice(finalValues);
      dispatcher(setPredictedPrice(price));
    } catch (error) {
      console.error("Error predicting car price:", error);
    }
  };

  useEffect(() => {
    console.log("predictedPrice:", predictedPrice);
  }, [predictedPrice]);

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
      {/* <Link to="/predict"> */}
      <Button variant="contained" disableElevation onClick={handlePrediction}>
        Start Prediction
      </Button>
      {/* </Link> */}
    </Box>
  );
};

export default FinalStep;
