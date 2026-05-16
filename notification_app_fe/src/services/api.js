import axios from "axios";

const API_URL =
  "http://localhost:5000/notifications";

export const fetchNotifications = async () => {

  try {

    const response =
      await axios.get(API_URL);

    return response.data.topNotifications;

  } catch (error) {

    console.error(
      "API Error:",
      error.message
    );

    return [];
  }
};