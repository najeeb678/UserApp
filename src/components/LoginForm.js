import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
          <TextField
            name="email"
            label="Email"
            sx={{ width: "100%", marginBottom: 2 }}
          />
          <TextField
            name="Password"
            label="Password"
            sx={{ width: "100%", marginBottom: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <Button component={Link} to="/" variant="contained" color="primary">
              Login
            </Button>

            <Button
              component={Link}
              to="/signUp"
              variant="contained"
              color="secondary"
            >
              SignUp
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
