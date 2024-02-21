import { Button } from "@mui/material";
import React from "react";

const GlobalButton = ({
  color = "primary",
  size = "medium",
  variant = "contained",
  title = "Button",
  onClick = () => {},
  type,
}) => {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      onClick={onClick}
      type={type}
    >
      {title}
    </Button>
  );
};

export default GlobalButton;
