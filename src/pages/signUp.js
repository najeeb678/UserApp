import React from "react";

import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import image from "../assets/image.jpg";

import GlobalTextField from "../components/UI/GlobalTextField";
import GlobalButton from "../components/UI/GlobalButton";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/home");
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{ maxWidth: "80%", maxHeight: "100%", borderRadius: 3, padding: 0 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box sx={{ padding: 4 }}>
              <Box sx={{ marginBottom: 1 }}>
                <Typography variant="h5" fontWeight="bold">
                  Welcome!
                </Typography>
                <Typography variant="h6">To the User Web APP</Typography>
              </Box>
              <form>
                <GlobalTextField name="name" label="Name" placeholder="Name" />
                <GlobalTextField
                  name="email"
                  label="Email"
                  placeholder="email"
                  type="email"
                />
                <GlobalTextField
                  name="password"
                  label="Password"
                  placeholder="password"
                  type="password"
                />
                <GlobalTextField
                  name="PhoneNo"
                  label="Phone Number"
                  placeholder="phoneNumber"
                  type="number"
                />
                <GlobalButton
                  variant="contained"
                  color="success"
                  title="Sign Up"
                  onclickHandler={handleSignUp}
                />
              </form>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  padding: 0,
                }}
              >
                <Typography style={{ fontSize: "15px" }}>
                  Already Have An Account?
                </Typography>
                <a
                  href="/"
                  sx={{
                    fontSize: "15px",
                    ml: 1,
                    cursor: "pointer",
                  }}
                >
                  Login Now
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopRightRadius: "10px", // Adjust the value as needed
                borderBottomRightRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SignUp;
