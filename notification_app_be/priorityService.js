const TYPE_WEIGHT = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function calculatePriority(notification) {

  const currentTime = new Date();

  const notificationTime =
    new Date(notification.Timestamp);

  const minutesOld =
    (currentTime - notificationTime) / (1000 * 60);

  const recencyScore =
    Math.max(0, 100 - minutesOld);

  return (
    TYPE_WEIGHT[notification.Type] +
    recencyScore
  );
}

function getTopNotifications(
  notifications,
  limit = 10
) {

  return notifications
    .map((notification) => ({

      ...notification,

      priority:
        calculatePriority(notification),

    }))
    .sort((a, b) =>
      b.priority - a.priority
    )
    .slice(0, limit);
}

module.exports = getTopNotifications;