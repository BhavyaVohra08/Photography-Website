const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlist-items");
const navBar = document.querySelector(".nav-list");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const imgTextTitle = document.querySelector(".img-text-title");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBar.classList.toggle("active");
});

var count = 1;
nextBtn.addEventListener("click", () => {
  count += 1;
  if (count === 4) {
    imgTextTitle.innerHTML = "<h3>Picture 1</h3>";
    count = 1;
    return;
  }
  imgTextTitle.innerHTML = `<h3>Picture ${count}</h3>`;
});

prevBtn.addEventListener("click", () => {
  if (count === 1) {
    imgTextTitle.innerHTML = "<h3>Picture 3</h3>";
    count = 3;
    return;
  }
  count -= 1;
  imgTextTitle.innerHTML = `<h3>Picture ${count}</h3>`;
});

let scrollContainer = document.querySelector(".img-slider");
let backBtn = document.querySelector(".back-btn");
let fwdBtn = document.querySelector(".fwd-btn");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

fwdBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 450;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 450;
});
