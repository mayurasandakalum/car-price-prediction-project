import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { predictCarPrice } from "../../../services/api";
import { setPredictedPrice } from "../../../reducers/homeSlice";

const FinalStep = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatcher = useDispatch();
  const navigate = useNavigate();

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
  const selectedMileage = useSelector((state) => state.home.mileage);
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
      mileage: selectedMileage,
      cylinders: selectedCylinders,
      doors: selectedDoors,
      airbags: selectedAirbags,
      levy: 632.06,
    };

    console.log("finalValues:", finalValues);

    try {
      const price = await predictCarPrice(finalValues);
      dispatcher(setPredictedPrice(price));
      if (price) {
        localStorage.setItem("predictedPrice", price.data.predictedPrice);
        setTimeout(() => {
          navigate("/predict");
        }, 2000);
      }
    } catch (error) {
      alert("Error predicting car price");
      console.error("Error predicting car price:", error);
    }
  };

  // useEffect(() => {
  //   console.log("predictedPrice:", predictedPrice);
  // }, [predictedPrice]);

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
      <Button
        variant="contained"
        disableElevation
        onClick={handlePrediction}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          width: "300px",
          height: "70px",
          borderRadius: "30px",
          bgcolor: "#545871",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#545871",
            fontWeight: "bold",
          },
          textTransform: "none",
          fontSize: "20px",
        }}
      >
        Start Prediction
      </Button>
    </Box>
  );
};

export default FinalStep;
