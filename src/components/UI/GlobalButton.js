import { Button } from "@mui/material";
import React from "react";

const GlobalButton = ({
  color = "primary",
  size = "medium",
  variant = "contained",
  title = "Button",
  onclickHandler = null,
  type,
}) => {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      onClick={onclickHandler}
      type={type}
    >
      {title}
    </Button>
  );
};

export default GlobalButton;
