import { Box } from "@mui/system";
import React from "react";
import GlobalButton from "../components/UI/GlobalButton";
import GlobalTextField from "../components/UI/GlobalTextField";

const Home = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>home</h1>
      <GlobalTextField
        name="phoneNo"
        label="small"
        color="success"
        placeholder="enter phone No"
      />
      <GlobalTextField
        name="phoneNo"
        label="large"
        color="success"
        placeholder="enter phone No"
      />
      
      <GlobalButton color="secondary" size="small" title="Home" />
    </Box>
  );
};

export default Home;
