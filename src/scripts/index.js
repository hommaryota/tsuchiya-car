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

// shop hover
// .shop__list-liを全て取り出す
const shopList = document.querySelectorAll(".shop__list-li");
// addEventListenerを各.shop__list-liに使うためにforEachで繰り返す
shopList.forEach(function (shopList) {
  // shopListをホバー時の処理
  shopList.addEventListener("mouseover", function () {
    // hoverクラスを取る
    document.querySelectorAll(".shop__list-li")[0].classList.remove("hover");
    // hoverした要素にhoverクラスを付与
    shopList.classList.add("hover");
  });

  // 以下mouseout時の処理
  shopList.addEventListener("mouseout", function () {
    shopList.classList.remove("hover");
  });
});

// .shop__list-liクリック時の表示
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < shopList.length; i++) {
    shopList[i].addEventListener("click", shopClick);
  }
  function shopClick() {
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
  }
});
