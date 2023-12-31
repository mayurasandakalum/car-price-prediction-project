import React, { useEffect } from "react";
import Avatar from "@mui/joy/Avatar";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import YesIcon from "@mui/icons-material/CheckRounded";
import NoIcon from "@mui/icons-material/ClearRounded";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setLeatherInterior } from "../../../reducers/homeSlice";

const SelectLeatherInterior = () => {
  const dispatcher = useDispatch();

  const selectedLeatherInterior = useSelector(
    (state) => state.home.leatherInterior
  );

  const handleLeatherInteriorSelect = (event) => {
    const value = event.target.value;

    if (value.toLowerCase() === "yes") {
      dispatcher(setLeatherInterior(1));
    } else {
      dispatcher(setLeatherInterior(0));
    }
  };

  // useEffect(() => {
  //   console.log("selectedLeatherInterior:", selectedLeatherInterior);
  // }, [selectedLeatherInterior]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: "100px",
      }}
    >
      <RadioGroup
        aria-label="platform"
        defaultValue="Website"
        overlay
        name="platform"
        onChange={handleLeatherInteriorSelect}
        sx={{
          flexDirection: "row",
          gap: 2,
          [`& .${radioClasses.checked}`]: {
            [`& .${radioClasses.action}`]: {
              inset: -1,
              border: "3px solid",
              borderColor: "primary.500",
            },
          },
          [`& .${radioClasses.radio}`]: {
            display: "contents",
            "& > svg": {
              zIndex: 2,
              position: "absolute",
              top: "-8px",
              right: "-8px",
              bgcolor: "background.surface",
              borderRadius: "50%",
            },
          },
        }}
      >
        {["Yes", "No"].map((value) => (
          <Sheet
            key={value}
            variant="outlined"
            sx={{
              borderRadius: "md",
              boxShadow: "sm",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.5,
              p: 2,
              minWidth: 200,
              minHeight: 200,
            }}
          >
            <Radio
              id={value}
              value={value}
              checkedIcon={<CheckCircleRoundedIcon />}
            />
            {value.toLowerCase() === "yes" ? (
              <Avatar variant="soft" size="lg" sx={{ bgcolor: "#63b363" }}>
                <YesIcon />
              </Avatar>
            ) : (
              <Avatar variant="soft" size="lg" sx={{ bgcolor: "#f96767" }}>
                <NoIcon />
              </Avatar>
            )}
            <FormLabel sx={{ fontSize: "25px" }} htmlFor={value}>
              {value}
            </FormLabel>
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default SelectLeatherInterior;
