// 監視対象
const child = document.querySelector(".child");

// ioに渡すコールバック関数を定義
// entries→io.observe()には複数要素を登録できる
// その要素をそれぞれ監視するためにforEachで繰り返し処理を行う
// observe
const cb = function (entries, observe) {
  // entryがそれぞれの要素に一致する
  entries.forEach((entry) => {
    // isIntersectingプロパティ→trueの場合は監視対象がスクロールに入った時
    // falseの時は、監視対象が出た時
    if (entry.isIntersecting) {
      console.log("in");
      // entry(監視対象のio.observe(child);が入ってきた場合)
      entry.target.classList.add("inView");

      // 入った時に完了させたい場合はunobserveメソッドを使う
      // observer.unobserve(entry.target);
    } else {
      console.log("out");
      entry.target.classList.remove("inView");
    }
  });
};

// ioへのoptionsで設定できる
const options = {
  // root 交差対象を指定できる null=画面に入った場合
  root: null,
  // root対象からmarginを設定できる
  rootMargin: "-200px 0px -200px 0px",
  // 0が要素の上 1が要素の下 細かく設定することもできる
  threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
};

// io→IntersectionObserver cb→callback関数
const io = new IntersectionObserver(cb, options);

// ioに監視したいDOMを登録する
// observeで対象の要素を指定する
// observeに監視対象を引数で渡す
io.observe(child);
