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

var tl = gsap.timeline({ defaults: { duration: 1 } });

tl
  // .from("header", {
  //   y: 50,
  //   opacity: 0,
  //   delay: 0.5,
  // })
  .from("#greeting", { opacity: 0 })
  .from("#f-name", { opacity: 0 }, "-=0.7")
  .from("#s-name", { opacity: 0 }, "-=0.7")
  .from(".section__subtitle--intro", { opacity: 0 }, "-=0.7")
  .from(".intro__img", { y: 50, opacity: 0, ease: "slowMo" }, "-=1");
