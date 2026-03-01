window.adminComplaints = [
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
    status: "Resolved",
    date: "2026-02-15",
  },
  {
    id: 4,
    title: "Broken chair",
    category: "Classroom",
    status: "Resolved",
    date: "2026-02-22",
  },
];

function calculateAnalytics() {
  const total = adminComplaints.length;
  document.getElementById("totalComplaints").innerText = total;

  const categoryCount = {};
  adminComplaints.forEach((c) => {
    categoryCount[c.category] = (categoryCount[c.category] || 0) + 1;
  });
  const commonCategory = Object.keys(categoryCount).reduce(
    (a, b) => (categoryCount[a] > categoryCount[b] ? a : b),
    "-",
  );
  document.getElementById("commonCategory").innerText = commonCategory;

  const resolved = adminComplaints.filter(
    (c) => c.status === "Resolved",
  ).length;
  const rate = total ? Math.round((resolved / total) * 100) : 0;
  document.getElementById("resolutionRate").innerText = rate + "%";

  const container = document.getElementById("recentComplaints");
  container.innerHTML = "";
  adminComplaints.forEach((c) => {
    let statusColor = "secondary";
    if (c.status === "Open") statusColor = "danger";
    else if (c.status === "In Progress") statusColor = "warning";
    else if (c.status === "Resolved") statusColor = "success";

    container.innerHTML += `
            <div class="card mb-2 shadow-sm">
                <div class="card-body">
                    <h6>${c.title}</h6>
                    <p class="mb-1">Category: ${c.category}</p>
                    <p class="mb-1"><small>Date: ${c.date}</small></p>
                    <span class="badge bg-${statusColor}">${c.status}</span>
                </div>
            </div>
        `;
  });
}

calculateAnalytics();
