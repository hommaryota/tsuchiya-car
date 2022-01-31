const anniversaryBtn = document.querySelector(".anniversary");
const anniversaryNav = document.querySelector(".nav__anniversary");
const anniversaryHover = document.querySelector(".anniversary__p");
anniversaryBtn.addEventListener("mouseover", function () {
  anniversaryNav.classList.add("hidden");
  anniversaryHover.classList.add("hover");
  anniversaryNav.classList.add("hover");
});
anniversaryBtn.addEventListener("mouseout", function () {
  anniversaryNav.classList.remove("hidden");
  anniversaryHover.classList.remove("hover");
});

// const companyBtn = document.querySelector(".company");
// companyBtn.addEventListener("mouseover", function () {
//   document.querySelector(".nav__company").classList.add("hidden");
// });
// companyBtn.addEventListener("mouseout", function () {
//   document.querySelector(".nav__company").classList.remove("hidden");
// });
const companyBtn = document.querySelector(".company");
const companyNav = document.querySelector(".nav__company");
const companyHover = document.querySelector(".company__p");
companyBtn.addEventListener("mouseover", function () {
  companyNav.classList.add("hidden");
  companyHover.classList.add("hover");
});
companyBtn.addEventListener("mouseout", function () {
  companyNav.classList.remove("hidden");
  companyHover.classList.remove("hover");
});
