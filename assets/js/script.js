console.log("✅ JavaScript is running!");

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check saved preference
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark);
  });
});
