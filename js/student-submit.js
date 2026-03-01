document.getElementById("submitForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("complaintTitle").value;
  const category = document.getElementById("complaintCategory").value;
  const description = document.getElementById("complaintDesc").value;
  const newComplaint = {
    id: Math.floor(Math.random() * 1000),
    title,
    category,
    status: "Open",
    date: new Date().toISOString().split("T")[0],
  };
  window.complaints.push(newComplaint);
  alert("Complaint submitted successfully!");
  document.getElementById("submitForm").reset();
  window.location.href = "stud-dashboard.html";
});
