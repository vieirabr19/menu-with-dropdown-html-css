const navLi = document.querySelectorAll(".nav li");

navLi.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      navLi.forEach((e) => e.classList.remove("active"));
      button.classList.add("active");
    }
  });
});
