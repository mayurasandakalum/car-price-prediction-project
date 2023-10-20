import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import congratsAnime from "../assets/lotties/congrats_anime.json";

const Prediction = () => {
  const [price, setPrice] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const predictedPrice = useSelector((state) => state.predictedPrice);

  useEffect(() => {
    const storedPrice = localStorage.getItem("predictedPrice");
    const parsedPrice = parseFloat(storedPrice);

    if (!isNaN(parsedPrice)) {
      setPrice(parsedPrice);
    }
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!animationComplete && (
        <Lottie
          animationData={congratsAnime}
          loop={false}
          onComplete={handleAnimationComplete}
        />
      )}

      {animationComplete && (
        <>
          <Typography sx={{ fontSize: "50px", fontFamily: "Patua One" }}>
            Predicted Price: {price.toFixed(2)}
          </Typography>
          <Typography
            sx={{ fontSize: "30px", fontFamily: "Patua One", color: "blue" }}
          >
            Model Accuracy: {80.4178} %
          </Typography>
        </>
      )}
    </div>
  );
};

export default Prediction;
