import React, {
  useEffect,
  useState,
} from "react";

import NotificationCard
from "./NotificationCard";

import {
  fetchNotifications,
} from "../services/api";

const NotificationList = () => {

  const [notifications,
    setNotifications] =
    useState([]);

  const [viewed,
    setViewed] =
    useState([]);

  useEffect(() => {

    async function loadData() {

      const data =
        await fetchNotifications();

      setNotifications(data);

    }

    loadData();

  }, []);

  const handleView = (id) => {

    setViewed([...viewed, id]);

  };

  return (

    <div>

      {notifications.map(
        (notification) => (

        <NotificationCard

          key={notification.ID}

          notification={notification}

          viewed={
            viewed.includes(
              notification.ID
            )
          }

          onClick={() =>
            handleView(
              notification.ID
            )
          }

        />

      ))}

    </div>
  );
};

export default NotificationList;