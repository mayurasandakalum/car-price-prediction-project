import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWheel } from "../../../reducers/homeSlice";

const WheelCard = ({ wheel }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatcher = useDispatch();

  const selectedWheel = useSelector((state) => state.home.wheel);

  const containerStyle = {
    height: "280px",
    borderRadius: "20px",
    backgroundColor: "white",
    border: selectedWheel === wheel ? "3px solid blue" : "none",
    boxShadow: isHovered ? "0px 10px 20px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "box-shadow 0.3s",
  };

  const handleWheelSelect = () => {
    if (selectedWheel === wheel) {
      dispatcher(setWheel(""));
      return;
    } else {
      dispatcher(setWheel(wheel));
    }
  };

  //   useEffect(() => {
  //     console.log("selectedWheel:", selectedWheel);
  //   }, [selectedWheel]);

  return (
    <Grid container item xs={3} direction="column" borderRadius="20px">
      <Grid
        container
        item
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleWheelSelect}
        style={containerStyle}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          item
          width="100%"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
            {wheel}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WheelCard;
