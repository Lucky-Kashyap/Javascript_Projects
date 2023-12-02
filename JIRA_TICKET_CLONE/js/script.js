// generate tickt

// select modal

var modal = document.querySelector(".wrapper-modal");
var generateTicket = document.querySelector(
  ".container .btn-container .add-btn i"
);

let addFlag = false;

generateTicket.addEventListener("click", () => {
  // Display Modal
  // Generate Ticket

  // add flag = true -> Modal Display
  // add flag = false -> Modal Display none

  // modal.classList.add(".hide");

  if (addFlag != true) {
    modal.style.display = "block";
    addFlag = true;
  } else {
    modal.style.display = "none";
    addFlag = false;
  }
});
