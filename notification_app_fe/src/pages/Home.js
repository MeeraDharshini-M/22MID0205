import React from "react";

import {
  Container,
  Typography,
} from "@mui/material";

import PriorityInbox
from "../components/PriorityInbox";

const Home = () => {

  return (

    <Container>

      <Typography
        variant="h3"
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >

        Campus Notifications

      </Typography>

      <PriorityInbox />

    </Container>
  );
};

export default Home;