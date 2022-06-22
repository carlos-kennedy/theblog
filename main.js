function openMenu() {
  document.body.classList.add("menuExpanded");
}

function closeMenu() {
  document.body.classList.remove("menuExpanded");
}

ScrollReveal({
  origin: "right",
  distance: "4rem",
  duration: 900,
}).reveal(`#home`);

ScrollReveal({
  origin: "top",
  distance: "4rem",
  duration: 900,
}).reveal(`#posts`);

ScrollReveal({
  origin: "bottom",
  distance: "4rem",
  duration: 1000,
}).reveal(`#subPosts`);
