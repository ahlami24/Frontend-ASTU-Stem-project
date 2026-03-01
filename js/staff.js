window.staffComplaints = [
  {
    id: 1,
    title: "Dormitory leak",
    category: "Dorm",
    status: "Open",
    date: "2026-02-20",
  },
  {
    id: 2,
    title: "Lab equipment broken",
    category: "Lab",
    status: "In Progress",
    date: "2026-02-18",
  },
  {
    id: 3,
    title: "Slow Internet",
    category: "Network",
    status: "Open",
    date: "2026-02-15",
  },
];

function displayStaffComplaints() {
  const container = document.getElementById("staffComplaintList");
  container.innerHTML = "";

  staffComplaints.forEach((c) => {
    let statusColor = "secondary";
    if (c.status === "Open") statusColor = "danger";
    else if (c.status === "In Progress") statusColor = "warning";
    else if (c.status === "Resolved") statusColor = "success";

    container.innerHTML += `
      <div class="card mb-3 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${c.title}</h5>
          <p class="card-text">Category: ${c.category}</p>
          <p class="card-text"><small class="text-muted">Date: ${c.date}</small></p>
          <span class="badge bg-${statusColor}">${c.status}</span>

          <div class="mt-2">
            <button class="btn btn-sm btn-danger" onclick="updateStatus(${c.id}, 'Open')">Open</button>
            <button class="btn btn-sm btn-warning" onclick="updateStatus(${c.id}, 'In Progress')">In Progress</button>
            <button class="btn btn-sm btn-success" onclick="updateStatus(${c.id}, 'Resolved')">Resolved</button>
          </div>
        </div>
      </div>
    `;
  });
}

function updateStatus(id, newStatus) {
  const complaint = staffComplaints.find((c) => c.id === id);

  if (complaint) {
    complaint.status = newStatus;

    addNotification(`"${complaint.title}" is ${newStatus}`);

    loadNotifications();

    displayStaffComplaints();
  }
}

displayStaffComplaints();
