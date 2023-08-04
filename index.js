const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  })
);

document.querySelector("#btn-warm").addEventListener("click", () => {
  document.body.classList.add("theme-warm");

  //   document.querySelector("#btn-warm").disabled = true;
});

document.querySelector("#btn-cold").addEventListener("click", () => {
  document.body.classList.remove("theme-warm");
});
