import React from "react";

import {
  Typography,
  Box,
} from "@mui/material";

import NotificationList
from "./NotificationList";

const PriorityInbox = () => {

  return (

    <Box sx={{ marginTop: 3 }}>

      <Typography
        variant="h4"
        sx={{ marginBottom: 3 }}
      >

        Priority Inbox

      </Typography>

      <NotificationList />

    </Box>
  );
};

export default PriorityInbox;