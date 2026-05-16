import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

const NotificationCard = ({
  notification,
  viewed,
  onClick,
}) => {

  return (

    <Card
      onClick={onClick}
      sx={{

        marginBottom: 2,

        backgroundColor:
          viewed ? "#f5f5f5" : "#ffffff",

        cursor: "pointer",

      }}
    >

      <CardContent>

        <Chip
          label={notification.Type}
          sx={{ marginBottom: 1 }}
        />

        <Typography variant="h6">

          {notification.Message}

        </Typography>

        <Typography variant="body2">

          {notification.Timestamp}

        </Typography>

        <Typography
          variant="body2"
          sx={{ marginTop: 1 }}
        >

          Priority Score:
          {" "}
          {notification.priority.toFixed(2)}

        </Typography>

      </CardContent>

    </Card>
  );
};

export default NotificationCard;