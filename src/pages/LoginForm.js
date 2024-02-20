import { Box,Typography } from "@mui/material";
import React from "react";
import GlobalTextField from "../components/UI/GlobalTextField";
import GlobalButton from "../components/UI/GlobalButton";

const LoginForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          width: "400px", // Adjust width as needed
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
          padding: 2,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="fontWeightBold" padding={3}>
          Login Page
        </Typography>
        <form>
          <GlobalTextField
            name="email"
            label="Email"
            placeholder="Enter email.."
          />
          <GlobalTextField
            name="Password"
            label="Password"
            placeholder="Enter password.."
          />
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <GlobalButton variant="contained" color="success" title="Log In" />
            <GlobalButton variant="contained" color="secondary" title="Sign Up"/>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
