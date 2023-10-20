import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Prediction = () => {
  const [price, setPrice] = useState(0);

  const predictedPrice = useSelector((state) => state.predictedPrice);

  useEffect(() => {
    const storedPrice = localStorage.getItem("predictedPrice");
    // Parse the stored value to a float to ensure it's a number
    const parsedPrice = parseFloat(storedPrice);

    // Check if the parsed value is a valid number
    if (!isNaN(parsedPrice)) {
      setPrice(parsedPrice);
      console.log("price:", parsedPrice);
    }
  }, []);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "50px", fontFamily: "Patua One" }}>
        Predicted Price: {price.toFixed(2)}
      </Typography>
    </div>
  );
};

export default Prediction;
