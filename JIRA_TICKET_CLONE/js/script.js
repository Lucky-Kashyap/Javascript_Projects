// generate tickt

// select modal

let modal = document.querySelector(".wrapper-modal");
let generateTicket = document.querySelector(
  ".container .btn-container .add-btn i"
);

let displayTicket = document.querySelector(".display-ticket");

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

modal.addEventListener("keydown", (e) => {
  let key = e.key;

  if (key === "Shift") {
    createTicket();
    modal.style.display = "none";
    addFlag = false;
  }
});

function createTicket() {
  let ticketContainer = document.createElement("div");
  ticketContainer.setAttribute("class", "ticket-container");

  ticketContainer.innerHTML = `
  <div class="ticket-color"></div>
          <div class="ticket-id">#jjbhj</div>
          <div class="ticket-area">Task 1</div>`;

  displayTicket.appendChild(ticketContainer);
}
