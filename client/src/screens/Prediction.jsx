import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import congratsAnime from "../assets/lotties/congrats_anime.json";
import backgroundImage from "../assets/bg.jpg";

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
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        background: `url(${backgroundImage}) no-repeat`,
        backgroundSize: "cover",
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
        <div
          style={{
            marginLeft: "200px",
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              fontFamily: "Patua One",
              color: "white",
            }}
          >
            Predicted Price: {price.toFixed(2)} €
          </Typography>
          <Typography
            sx={{ fontSize: "34px", fontFamily: "Patua One", color: "#72c569" }}
          >
            Model Accuracy: {80.4178} %
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Prediction;
