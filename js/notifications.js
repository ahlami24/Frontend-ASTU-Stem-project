function loadNotifications() {
  const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
  const list = document.getElementById("notificationList");
  const count = document.getElementById("notificationCount");

  if (!list || !count) return;

  list.innerHTML = "";

  if (notifications.length === 0) {
    list.innerHTML = `<li><span class="dropdown-item">No notifications</span></li>`;
  } else {
    notifications.forEach((n) => {
      list.innerHTML += `<li><span class="dropdown-item">${n}</span></li>`;
    });
  }

  count.innerText = notifications.length;
}

function addNotification(message) {
  const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
  notifications.unshift(message);
  localStorage.setItem("notifications", JSON.stringify(notifications));
}

document.addEventListener("DOMContentLoaded", function () {
  loadNotifications();

  const bellButton = document.querySelector('[data-bs-toggle="dropdown"]');

  if (bellButton) {
    bellButton.addEventListener("click", function () {
      setTimeout(() => {
        localStorage.removeItem("notifications");
        loadNotifications();
      }, 3000);
    });
  }
});
