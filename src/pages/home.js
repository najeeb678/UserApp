import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userName = useSelector((state) =>
    state.userDetails.users.length > 0
      ? state.userDetails.users[0].name
      : "amlakmcladmc"
  );

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
    </Box>
  );
};

export default Home;
