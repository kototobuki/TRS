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