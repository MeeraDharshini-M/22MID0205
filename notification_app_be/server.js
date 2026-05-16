const express = require("express");
const cors = require("cors");

const fetchNotifications =
  require("./notificationService");

const getTopNotifications =
  require("./priorityService");

const Log =
  require("../logging_middleware/logger");

const app = express();

app.use(cors());

const PORT = 5000;


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtZWVyYWRoYXJzaGluaS5tMjAyMkB2aXRzdHVkZW50LmFjLmluIiwiZXhwIjoxNzc4OTMxMzkxLCJpYXQiOjE3Nzg5MzA0OTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkMTJjOTIwMC1jMjcwLTQwMDItODI5Yi1kMGRkMmQ2ODVjOTUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtZWVyYWRoYXJzaGluaSIsInN1YiI6IjgyNTk3Y2FhLWNmNzUtNGMxYS05MmIyLTI4NDBjNmVhOGRhNiJ9LCJlbWFpbCI6Im1lZXJhZGhhcnNoaW5pLm0yMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJuYW1lIjoibWVlcmFkaGFyc2hpbmkiLCJyb2xsTm8iOiIyMm1pZDAyMDUiLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiI4MjU5N2NhYS1jZjc1LTRjMWEtOTJiMi0yODQwYzZlYThkYTYiLCJjbGllbnRTZWNyZXQiOiJEdmZTWkNUdEtFRGFWYXNhIn0.MXbQ1vUfTS9Bg8hwtqZbh65QpnM5V7iZvjkvWCUxSlM";

app.get("/notifications", async (req, res) => {

  try {

    await Log(
      "backend",
      "info",
      "route",
      "Fetching notifications",
      token
    );

    const notifications =
      await fetchNotifications(token);

    const topNotifications =
      getTopNotifications(notifications);

    res.json({
      success: true,
      total: notifications.length,
      topNotifications,
    });

  } catch (error) {

    await Log(
      "backend",
      "error",
      "route",
      "Error fetching notifications",
      token
    );

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
});

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});