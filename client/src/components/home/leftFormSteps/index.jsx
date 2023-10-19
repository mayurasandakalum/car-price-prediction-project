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
import { styled } from "@mui/material";

const StyledStepLabel = styled(StepLabel)({
  "& .MuiStepLabel-label": {
    fontSize: "20px",
    fontWeight: "bold",
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
          <Step key={step.label}>
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
      {activeStep === STEPS.length - 1 && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default LeftFormSteps;