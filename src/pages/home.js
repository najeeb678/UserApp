import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalButton from "../components/UI/GlobalButton";
import { setAuthenticated } from "../Redux/Slices/userDetails";
import { Button } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) =>
    state.userDetails.users.length > 0
      ? state.userDetails.users[0].name
      : "amlakmcladmc"
  );

  const logoutFunction = () => {
    dispatch(setAuthenticated(false));
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2>Welcome {userName}</h2>
      <Box sx={{ margin: "50px" }}>
        <Button onClick={logoutFunction}></Button>
      </Box>
    </Box>
  );
};

export default Home;
