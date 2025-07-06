document.addEventListener("DOMContentLoaded", () => {
  // メニュー開閉
  const openBtn = document.querySelector(".open-btn");
  const menu = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close-btn span");

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
})

// フォーム切替 + スクロール
const btnPersonal = document.getElementById("btn-personal");
const btnCorporate = document.getElementById("btn-corporate");
const formPersonal = document.getElementById("form-personal");
const formCorporate = document.getElementById("form-corporate");

btnPersonal?.addEventListener("click", () => {
  formCorporate.style.display = "none";
  formPersonal.style.display = "flex";

  const rect = formPersonal.getBoundingClientRect();
  const offset = window.scrollY + rect.top;
  window.scrollTo({ top: offset, behavior: "smooth" });
});

btnCorporate?.addEventListener("click", () => {
  formPersonal.style.display = "none";
  formCorporate.style.display = "flex";

  const rect = formCorporate.getBoundingClientRect();
  const offset = window.scrollY + rect.top;
  window.scrollTo({ top: offset, behavior: "smooth" });
});

// 遷移用ボタンのイベント設定
window.addEventListener("DOMContentLoaded", () => {
  const btnGoPersonal = document.getElementById("go-personal");
  const btnGoCorporate = document.getElementById("go-corporate");

  if (btnGoPersonal) {
    btnGoPersonal.addEventListener("click", () => {
      window.location.href = "contact.html?type=personal";
    });
  }

  if (btnGoCorporate) {
    btnGoCorporate.addEventListener("click", () => {
      window.location.href = "contact.html?type=corporate";
    });
  }

})
