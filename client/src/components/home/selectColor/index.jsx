import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getColors } from "../../../services/api";
import { Grid } from "@mui/material";
import ColorCard from "../colorCard";

const SelectColor = () => {
  const [colors, setColors] = useState();

  const manufacturer = useSelector((state) => state.home.manufacturer);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getColors(manufacturer);
        setColors(response.data);
      } catch (error) {
        console.log("Error fetching models", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("colors:", colors);
  }, [colors]);

  {
    /* <div className="color-icons">
        {colors &&
          Object.entries(colors).map(([colorName, svgUrl], index) => (
            <div key={index} className="color-icon">
              <img src={svgUrl} alt={colorName} style={{ width: "100px" }} />
            </div>
          ))}
      </div> */
  }

  return (
    <Grid container spacing={2} xs={12} padding="30px 60px">
      {colors &&
        Object.entries(colors).map(([colorName, url], index) => (
          //   <div key={index} className="color-icon">
          //     <img src={url} alt={colorName} style={{ width: "100px" }} />
          //   </div>

          <ColorCard key={index} colorName={colorName} url={url} />
        ))}
    </Grid>
  );
};

export default SelectColor;
