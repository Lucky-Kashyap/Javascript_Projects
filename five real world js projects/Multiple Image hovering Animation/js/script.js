// Multiple Image hovering Animation

var elem = document.querySelectorAll(".elem");
// var elemImage = document.querySelector(".elem img");

// elem.addEventListener("mousemove", (e) => {
// console.log(e);
//   elemImage.style.left = e.x + "px";
//   elemImage.style.top = e.y + "px";
// });

// elem.addEventListener("mouseenter", (e) => {
//   elemImage.style.opacity = 1;
// });
// elem.addEventListener("mouseleave", (e) => {
//   elemImage.style.opacity = 0;
// });

elem.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.childNodes[3].style.opacity = 1;
  });
  el.addEventListener("mouseleave", () => {
    el.childNodes[3].style.opacity = 0;
  });
  el.addEventListener("mousemove", (e) => {
    el.childNodes[3].style.left = e.x + "px";
    // el.childNodes[3].style.top = e.y + "px";
  });
});
