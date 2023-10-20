import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGearBoxType } from "../../../reducers/homeSlice";

const GearBoxCard = ({ gearBoxType }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dispatcher = useDispatch();

  const selectedGearBox = useSelector((state) => state.home.gearBoxType);

  const containerStyle = {
    height: "250px",
    borderRadius: "20px",
    backgroundColor: "white",
    border: selectedGearBox === gearBoxType ? "3px solid #012148" : "none",
    boxShadow: isHovered ? "0px 10px 20px 10px rgba(0, 0, 0, 0.1)" : "none",
    transition: "box-shadow 0.3s",
  };

  const handleGearBoxSelect = () => {
    if (selectedGearBox === gearBoxType) {
      dispatcher(setGearBoxType(""));
      return;
    } else {
      dispatcher(setGearBoxType(gearBoxType));
    }
  };

  //   useEffect(() => {
  //     console.log("selectedGearBox:", selectedGearBox);
  //   }, [selectedGearBox]);

  return (
    <Grid container item xs={3} direction="column" borderRadius="20px">
      <Grid
        container
        item
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleGearBoxSelect}
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
            {gearBoxType}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GearBoxCard;
