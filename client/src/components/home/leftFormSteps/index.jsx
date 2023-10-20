import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";

import { reset } from "../../../reducers/homeSlice";
import { STEPS } from "../../../constants/steps";
import { StepButton, styled } from "@mui/material";

const StyledStepLabel = styled(StepLabel)({
  "& .MuiStepLabel-label": {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  "& .css-1hv8oq8-MuiStepLabel-label.Mui-active": {
    color: "rgb(255, 226, 0)",
  },
  "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": {
    color: "rgb(255, 226, 0)",
  },
});

const LeftFormSteps = () => {
  const dispatcher = useDispatch();
  const activeStep = useSelector((state) => state.home.value);

  const handleReset = () => {
    dispatcher(reset());
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {STEPS.map((step, index) => (
          <Step key={step.label} sx={{}}>
            <StyledStepLabel
              optional={
                index === STEPS.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              sx={{ fontSize: "20px", color: "red" }}
            >
              {step.label}
            </StyledStepLabel>
            {/* <StepContent>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent> */}
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === STEPS.length - 1 && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
};

export default LeftFormSteps;
