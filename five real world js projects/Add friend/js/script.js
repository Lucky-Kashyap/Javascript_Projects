// add friend

// select elements

var isStatus = document.querySelector("h5");

var add = document.querySelector(".add");
var remove = document.querySelector(".remove");

add.addEventListener("click", () => {
  isStatus.innerHTML = "Friends";
});

remove.addEventListener("click", () => {
  isStatus.innerHTML = "Stranger";
});
