import { TextField } from "@mui/material";
import React from "react";

const GlobalTextField = ({
  color = "primary",
  name = "textfield",
  label = "TextField",
  placeholder = "Enter text",
  type="text"
 
}) => {
  return (
    <>
      <TextField
        name={name}
        type={type}
        label={label}
        color={color}
        placeholder={placeholder}
       
        sx={{ width: "100%", marginBottom: 2 }}
      />
    </>
  );
};

export default GlobalTextField;
