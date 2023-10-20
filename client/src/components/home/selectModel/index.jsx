import React, { useEffect, useState } from "react";

import { getModels } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";
import { setModel } from "../../../reducers/homeSlice";

const SelectModel = () => {
  const dispatcher = useDispatch();

  const [models, setModels] = useState();
  const manufacturer = useSelector((state) => state.home.manufacturer);
  const model = useSelector((state) => state.home.model);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getModels(manufacturer);
        setModels(response.data.models);
      } catch (error) {
        console.log("Error fetching models", error);
      }
    }

    fetchData();
  }, []);

  //   useEffect(() => {
  //     console.log("models:", models);
  //   }, [models]);

  //   useEffect(() => {
  //     console.log("selected model:", model);
  //   }, [model]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Autocomplete
        disablePortal
        onChange={(event, newValue) => {
          dispatcher(setModel(newValue));
        }}
        id="combo-box-demo"
        options={models}
        sx={{ width: 500, height: "10px" }}
        renderInput={(params) => <TextField {...params} label="Models" />}
      />
    </div>
  );
};

export default SelectModel;
