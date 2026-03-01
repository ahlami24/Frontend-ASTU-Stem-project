document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let data = null;
  if (email === "student@astu.com" && password === "1234") {
    data = { token: "mock-token-student", role: "student" };
  } else if (email === "staff@astu.com" && password === "1234") {
    data = { token: "mock-token-staff", role: "staff" };
  } else if (email === "admin@astu.com" && password === "1234") {
    data = { token: "mock-token-admin", role: "admin" };
  }

  if (data) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);

    if (data.role === "student") {
      window.location.href = "stud-dashboard.html";
    } else if (data.role === "staff") {
      window.location.href = "staff-dashboard.html";
    } else if (data.role === "admin") {
      window.location.href = "admin-dashboard.html";
    }
  } else {
    alert(
      "Invalid credentials. Use student@astu.com, staff@astu.com, or admin@astu.com with password 1234",
    );
  }
});
