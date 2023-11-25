// add friend

// select elements

var isStatus = document.querySelector("h5");

var add = document.querySelector(".add");

var check = 0;
// var remove = document.querySelector(".remove");

add.addEventListener("click", () => {
  if (check === 0) {
    isStatus.innerHTML = "Friends";
    add.innerHTML = "Remove Friend";
    isStatus.style.color = "green";
    check = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    add.innerHTML = "Add Friend";
    isStatus.style.color = "red";
    check = 0;
  }
  // isStatus.innerHTML = "Friends";
  // add.innerHTML = "Remove";
  // isStatus.style.color = "green";
  // isStatus.classList.remove("hide");
});

// remove.addEventListener("click", () => {
//   isStatus.innerHTML = "Stranger";
// });
