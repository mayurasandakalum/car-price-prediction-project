import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FinalStep = () => {
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
        <Button variant="contained" disableElevation>
          Start Prediction
        </Button>
      </Link>
    </Box>
  );
};

export default FinalStep;
