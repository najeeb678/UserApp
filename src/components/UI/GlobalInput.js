import { FormHelperText, TextField } from "@mui/material";

import React from "react";

const GlobalInput = ({
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
        helperText={
          <FormHelperText sx={{ color: "#f84d4d" }}>
            {helperText}
          </FormHelperText>
        }
        sx={{ width: "100%", marginBottom: 2 }}
      />
    </>
  );
};

export default GlobalInput;
