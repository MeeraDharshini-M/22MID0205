const axios = require("axios");

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

async function fetchNotifications(token) {

  try {

    const response = await axios.get(API_URL, {

      headers: {
        Authorization: `Bearer ${token}`,
      },

    });

    return response.data.notifications;

  } catch (error) {

    console.error(
      "Error fetching notifications:",
      error.response?.data || error.message
    );

    return [];
  }
}

module.exports = fetchNotifications;