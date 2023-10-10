import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useDispatch, useSelector } from "react-redux";
import { next, back } from "../../../features/homeSlice";
import { STEPS } from "../../../constants/steps";

const RightSideSteps = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const activeStep = useSelector((state) => state.home.value);

  const handleNext = () => {
    dispatch(next());
  };

  const handleBack = () => {
    dispatch(back());
  };

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: "5%",
          pl: 2,
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper> */}
      <Box
        sx={{
          height: "95%",
          width: "100%",
        }}
      >
        {STEPS[activeStep].description}
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
