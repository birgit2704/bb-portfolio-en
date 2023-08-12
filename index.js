let preference = +window.localStorage.getItem("preferWarm");
const button = document.querySelector("#btn-warm");

if (+window.localStorage.getItem("preferWarm")) {
  document.body.classList.toggle("theme-warm");
  if (button) {
    button.textContent = preference ? "⛄" : "☀️";
  }
}

//local Storage cannot keep booleans, or integers (therefore '+')

document.body.addEventListener("click", (e) => {
  if (e.target.id == "btn-warm") {
    if (+window.localStorage.getItem("preferWarm")) {
      window.localStorage.setItem("preferWarm", 0);
      button.textContent = "☀️";
    } else {
      window.localStorage.setItem("preferWarm", 1);
      button.textContent = "⛄";
    }
    document.body.classList.toggle("theme-warm");
  }
});

// NAVIGATION

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

// ANIMATION WHEN PAGE LOADS

// var tl = gsap.timeline({ defaults: { duration: 2.5 } });

// tl
// .from("header", {
//   y: 50,
//   opacity: 0,
//   delay: 0.5,
// })
// .from("#home", { opacity: 0 });
// .from("#f-name", { opacity: 0.1 }, "-=0.7")
// .from("#s-name", { opacity: 0.1 }, "-=0.7")
// .from(".section__subtitle--intro", { opacity: 0.1 }, "-=0.7")
// .from(".intro__img", { opacity: 0.1 }, "-=0.7");
