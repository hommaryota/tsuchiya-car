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

    document.querySelector(".is-active").classList.remove("is-active");
    const arrayList = Array.prototype.slice.call(shopList);
    const index = arrayList.indexOf(this);
    console.log(index);
    document.querySelectorAll(".shop__detail")[index].classList.add("is-active");
  }
});

// company画面 tab切り替え
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".btn");
  const hover = document.getElementsByClassName("btn__hover");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabSwitch);
  }

  function tabSwitch() {
    document.querySelector(".active").classList.remove("active");

    document.querySelector(".show").classList.remove("show");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    hover[index].classList.add("active");
    document.querySelectorAll(".tab")[index].classList.add("show");
  }
});

//
document.querySelector(".recruit").addEventListener(
  "mouseover",
  function () {
    document.querySelectorAll(".recruit__btn")[0].classList.add("hidden");
    document.querySelectorAll(".recruit__hover")[0].classList.add("hover");
  },
  false
);
document.querySelector(".recruit").addEventListener(
  "mouseout",
  function () {
    document.querySelectorAll(".recruit__btn")[0].classList.remove("hidden");
    document.querySelectorAll(".recruit__hover")[0].classList.remove("hover");
  },
  false
);
document.querySelector(".recruit").addEventListener(
  "mouseover",
  function () {
    document.querySelectorAll(".recruit__btn")[1].classList.add("hidden");
    document.querySelectorAll(".recruit__hover")[1].classList.add("hover");
  },
  false
);
document.querySelector(".recruit").addEventListener(
  "mouseout",
  function () {
    document.querySelectorAll(".recruit__btn")[1].classList.remove("hidden");
    document.querySelectorAll(".recruit__hover")[1].classList.remove("hover");
  },
  false
);

// recruit scroll
const myFunc = function () {
  //Classを追加する要素を取得
  const target1 = document.querySelector(".idea");
  const target2 = document.querySelector(".history");
  //Classを追加する位置を指定（ビューポート内）
  const position = Math.floor(window.innerHeight * 0.7); //左記はビューポート内の上から75%の位置を指定

  //要素の数だけループする
  // for (let i = 0; i < target.length; i++) {
  //要素の上部座標を取得する（小数点切り捨て）
  let offsetBottom = Math.floor(target1.getBoundingClientRect().bottom);
  let offsetTop = Math.floor(target2.getBoundingClientRect().top);
  //要素の上部座標がpositionの位置を通過したら
  if (offsetBottom < position) {
    // console.log(offsetBottom)
    // console.log(position);
    document.querySelector(".recruit__main").classList.add("none");
    document.querySelector(".recruit__greeting").classList.remove("none");
  } else if (offsetBottom > position) {
    document.querySelector(".recruit__main").classList.remove("none");
    document.querySelector(".recruit__greeting").classList.add("none");
  }
  if (offsetBottom < position && offsetTop < position) {
    document.querySelector(".recruit__main").classList.remove("none");
    document.querySelector(".recruit__greeting").classList.add("none");
  }
  // }
};
//スクロールイベントリスナーに登録
window.addEventListener("scroll", myFunc, false);
