let isDragging = false;
let startX, scrollLeft;

// Create an artificial scroll area
const container = document.querySelector(".bg-container");
const body = document.body;

// Center image initially
window.addEventListener("load", () => {
  const centerX = (container.scrollWidth - window.innerWidth) / 2;
  console.log(centerX);
  
  window.scrollTo(centerX, 0);
});

// Mouse drag controls
body.addEventListener("mousedown", (e) => {
  isDragging = true;
  body.style.cursor = "grabbing";
  startX = e.pageX + window.scrollX;
});

body.addEventListener("mouseleave", () => {
  isDragging = false;
  body.style.cursor = "grab";
});

body.addEventListener("mouseup", () => {
  isDragging = false;
  body.style.cursor = "grab";
});

body.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.pageX + window.scrollX;
  const walk = startX - x; // distance dragged
  window.scrollBy(walk, 0);
  startX = e.pageX + window.scrollX;
});

// Touch support
body.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX + window.scrollX;
});

body.addEventListener("touchend", () => {
  isDragging = false;
});

body.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX + window.scrollX;
  const walk = startX - x;
  window.scrollBy(walk, 0);
  startX = e.touches[0].pageX + window.scrollX;
});
