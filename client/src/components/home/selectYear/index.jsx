import React, { useEffect } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { setProductionYear } from "../../../reducers/homeSlice";

const SelectYear = () => {
  const dispatcher = useDispatch();
  const productionYear = useSelector((state) => state.home.productionYear);

  // useEffect(() => {
  //   console.log("productionYear:", productionYear);
  // }, [productionYear]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: "100px",
        // alignItems: "center",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label={'"year"'}
            openTo="year"
            views={["year"]}
            onChange={(date) => dispatcher(setProductionYear(date.year()))}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default SelectYear;
