import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CarCard from "../carCard";

import { useDispatch, useSelector } from "react-redux";
import { next, back } from "../../../reducers/homeSlice";
import { STEPS } from "../../../constants/steps";

import { getManufacturers } from "../../../services/api";
import { Grid } from "@mui/material";
import SelectManufacturer from "../selectManufacturer";
import SelectModel from "../selectModel";

const RightSideSteps = () => {
  const [manufacturers, setManufacturers] = useState();

  const theme = useTheme();
  const dispatch = useDispatch();

  const activeStep = useSelector((state) => state.home.value);
  const selectedManufacturer = useSelector((state) => state.home.manufacturer);

  useEffect(() => {
    console.log("selectedManufacturer:", selectedManufacturer);
  }, [selectedManufacturer]);

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
        <Typography>{STEPS[activeStep].description}</Typography>

        {STEPS[activeStep].index === "manufacturer" && (
          <SelectManufacturer manufacturers={manufacturers} />
        )}

        {STEPS[activeStep].index === "model" && <SelectModel />}
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
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default RightSideSteps;
