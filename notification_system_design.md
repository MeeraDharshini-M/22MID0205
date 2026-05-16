Stage 1 — Notification Priority System
Problem Statement

The goal of this system is to prioritize important campus notifications so users can quickly identify the most relevant unread notifications.

Approach

The backend fetches notifications from the protected Notification API using Bearer authentication.

Notifications are prioritized using:

Notification type weight
Recency score

Priority order:
Placement > Result > Event

Priority Calculation

Each notification receives:

Priority Score = Type Weight + Recency Score

Optimization Strategy

To efficiently maintain top notifications:

Notifications are sorted by calculated priority
Only top 10 notifications are returned

Future optimization can include:

Min Heap
Redis caching
Kafka streaming

Technologies Used
Node.js
Express.js
Axios
Logging Middleware

Time Complexity
Sorting: O(n log n)

Future Heap optimization: O(n log k)