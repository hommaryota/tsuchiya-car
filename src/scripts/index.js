// nav anniversary
document.querySelector(".anniversary").addEventListener("mouseover", function () {
  document.querySelector(".anniversary-img").classList.add("hidden");
  document.querySelector(".anniversary__p").classList.add("hover");
  document.querySelector(".nav__anniversary").classList.add("hover");
});

document.querySelector(".anniversary").addEventListener("mouseout", function () {
  document.querySelector(".anniversary-img").classList.remove("hidden");
  document.querySelector(".anniversary__p").classList.remove("hover");
  document.querySelector(".nav__anniversary").classList.remove("hover");
});

// nav company
document.querySelector(".company").addEventListener("mouseover", function () {
  document.querySelector(".company-img").classList.add("hidden");
  document.querySelector(".company__p").classList.add("hover");
  document.querySelector(".nav__company").classList.add("hover");
});

document.querySelector(".company").addEventListener("mouseout", function () {
  document.querySelector(".company-img").classList.remove("hidden");
  document.querySelector(".company__p").classList.remove("hover");
  document.querySelector(".nav__company").classList.remove("hover");
});