import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useDispatch, useSelector } from "react-redux";
import { next, back } from "../../../reducers/homeSlice";
import { STEPS } from "../../../constants/steps";

import { getManufacturers } from "../../../services/api";
import SelectManufacturer from "../selectManufacturer";
import SelectModel from "../selectModel";
import SelectYear from "../selectYear";
import SelectColor from "../selectColor";
import SelectEngineVolume from "../selectEngineVolume";
import SelectCategory from "../selectCategory";
import SelectLeatherInterior from "../selectLeatherInterior";
import SelectFuelType from "../selectFuelType";
import SelectGearBoxType from "../selectGearBoxType";
import SelectDriveWheel from "../selectDriveWheel";
import SelectWheel from "../selectWheel";
import SelectLevy from "../selectLevy";
import SelectCylinders from "../selectCylinders";
import FinalStep from "../finalStep";
import SelectDoors from "../selectDoors";
import SelectAirbags from "../selectAirbags";

const RightSideSteps = () => {
  const [manufacturers, setManufacturers] = useState();

  const theme = useTheme();
  const dispatch = useDispatch();

  const activeStep = useSelector((state) => state.home.value);
  const selectedManufacturer = useSelector((state) => state.home.manufacturer);

  // useEffect(() => {
  //   console.log("selectedManufacturer:", selectedManufacturer);
  // }, [selectedManufacturer]);

  const handleNext = () => {
    dispatch(next());
  };

  const handleBack = () => {
    dispatch(back());
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getManufacturers();
        setManufacturers(response);
      } catch (error) {
        console.log("Error fetching manufacturers", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "95%",
          width: "100%",
          overflow: "auto",
        }}
      >
        <Box sx={{ mx: "100px", mt: "20px" }}>
          <Typography
            sx={{
              fontFamily: "Patua One",
              fontSize: "50px",
              textAlign: "center",
            }}
          >
            {STEPS[activeStep].description}
          </Typography>
        </Box>

        {STEPS[activeStep].index === "manufacturer" && (
          <SelectManufacturer manufacturers={manufacturers} />
        )}
        {STEPS[activeStep].index === "model" && <SelectModel />}
        {STEPS[activeStep].index === "year" && <SelectYear />}
        {STEPS[activeStep].index === "color" && <SelectColor />}
        {STEPS[activeStep].index === "volume" && <SelectEngineVolume />}
        {STEPS[activeStep].index === "category" && <SelectCategory />}
        {STEPS[activeStep].index === "leatherinterior" && (
          <SelectLeatherInterior />
        )}
        {STEPS[activeStep].index === "fuel" && <SelectFuelType />}
        {STEPS[activeStep].index === "gearbox" && <SelectGearBoxType />}
        {STEPS[activeStep].index === "drivewheel" && <SelectDriveWheel />}
        {STEPS[activeStep].index === "wheel" && <SelectWheel />}
        {STEPS[activeStep].index === "levy" && <SelectLevy />}
        {STEPS[activeStep].index === "cylinders" && <SelectCylinders />}
        {STEPS[activeStep].index === "doors" && <SelectDoors />}
        {STEPS[activeStep].index === "airbags" && <SelectAirbags />}
        {STEPS[activeStep].index === "final" && <FinalStep />}
      </Box>
      <MobileStepper
        variant="progress"
        steps={STEPS.length}
        position="static"
        sx={{ height: "5%", p: 0 }}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === STEPS.length - 1}
            sx={{
              mr: "20px",
              borderRadius: "30px",
              bgcolor: "#545871",
              color: "white",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#545871",
                color: "white",
              },
            }}
          >
            Next
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              ml: "20px",
              borderRadius: "30px",
              bgcolor: "white",
              color: "#545871",
              textTransform: "none",
              border: "1px solid #545871",
              "&:hover": {
                bgcolor: "white",
                color: "#545871",
              },
            }}
          >
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default RightSideSteps;
