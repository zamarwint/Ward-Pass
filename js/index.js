const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.toggle("light-mode");
    toggle.className = "fa-solid fa-sun";
    toggle.style.color = "#fff";
  } else {
    document.body.classList.toggle("light-mode");
    toggle.className = "fa-solid fa-moon";
    toggle.style.color = "#000";
  }
});
