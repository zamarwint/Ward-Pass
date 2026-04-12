// Handling light and dark mode the right way.
const toggle = document.querySelector("#toggle");

// Dark mode by default
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
}

if (localStorage.getItem("theme") === "light") {
  // If it was stored as light, apply light mode.
  document.body.classList.toggle("light-mode");
  toggle.className = "fa-solid fa-moon";
  toggle.style.color = "#000";
}

toggle.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    // Change it to light
    localStorage.setItem("theme", "light");
    document.body.classList.toggle("light-mode");
    toggle.className = "fa-solid fa-moon";
    toggle.style.color = "#000";
  } else if (localStorage.getItem("theme") === "light") {
    // Change it to dark
    localStorage.setItem("theme", "dark");
    document.body.classList.remove("light-mode");
    toggle.className = "fa-solid fa-sun";
    toggle.style.color = "#fff";
  }
});
