import { TextField } from "@mui/material";

import React from "react";

const GlobalTextField = ({
  color = "primary",
  name = "textfield",
  label = "TextField",
  type = "text",
  onChangehandler,
  onBlurHandler,
  value,
  helperText,
}) => {
  return (
    <>
      <TextField
        name={name}
        value={value}
        type={type}
        label={label}
        color={color}
        onChange={onChangehandler}
        onBlur={onBlurHandler}
        helperText={helperText}
        sx={{ width: "100%", marginBottom: 2 }}
      />
    </>
  );
};

export default GlobalTextField;
