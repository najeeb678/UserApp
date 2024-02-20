import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "20px",
        "&>*": { marginRight: "10px" },
      }}
    >
      <Link to="/">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
      <Link to="/home">
        <Button variant="contained" color="secondary">
          SignUp
        </Button>
      </Link>
      <Link to="/signUp">
        <Button variant="contained" color="success">
          Home
        </Button>
      </Link>
    </Stack>
  );
};

export default NavBar;
