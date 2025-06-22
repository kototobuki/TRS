// メニュー表示
const openBtn = document.querySelector(".open-btn");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn span");

openBtn.addEventListener("click", () => {
  const isHidden = window.getComputedStyle(menu).display === "none";
  menu.style.display = isHidden ? "block" : "none";
});


openBtn.addEventListener("click", () => {
  menu.classList.remove("hide"); 
  menu.style.display = "flex";
  menu.classList.add("show"); 
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  menu.classList.add("hide");

  setTimeout(() => {
    menu.style.display = "none";
    menu.classList.remove("hide"); 
  }, 500); 
});

// フォームの切り替え
$(function () {
  $("#btn-personal").on("click", function () {
    $("#form-corporate").hide();
    $("#form-personal").show();
  });

  $("#btn-corporate").on("click", function () {
    $("#form-personal").hide();
    $("#form-corporate").show();
  });
});

//　スライド
$(function () {
  $("#btn-personal").on("click", function () {
    $("#form-corporate").hide();
    $("#form-personal").show();

    $("html, body").animate({
      scrollTop: $("#form-personal").offset().top
    }, 600);
  });

  $("#btn-corporate").on("click", function () {
    $("#form-personal").hide();
    $("#form-corporate").show();

    $("html, body").animate({
      scrollTop: $("#form-corporate").offset().top
    }, 600);
  });
});
// 高さ制御
document.getElementById("btn-personal").addEventListener("click", () => {
  const form = document.getElementById("form-personal");
  form.style.display = "flex";
  document.getElementById("form-corporate").style.display = "none";

  // スクロール位置を調整
  const formRect = form.getBoundingClientRect();
  const offset = formRect.bottom - window.innerHeight;
  window.scrollBy({
    top: offset,
    behavior: "smooth"
  });
});

document.getElementById("btn-corporate").addEventListener("click", () => {
  const form = document.getElementById("form-corporate");
  form.style.display = "flex";
  document.getElementById("form-personal").style.display = "none";

  const formRect = form.getBoundingClientRect();
  const offset = formRect.bottom - window.innerHeight;
  window.scrollBy({
    top: offset,
    behavior: "smooth"
  });
});
