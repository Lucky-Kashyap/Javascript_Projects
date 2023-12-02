// generate tickt

// select modal

let modal = document.querySelector(".wrapper-modal");
let generateTicket = document.querySelector(
  ".container .btn-container .add-btn i"
);
let textareaContainer = document.querySelector(".textarea-container");

let displayTicket = document.querySelector(".display-ticket");

let addFlag = false;

let allPriorityColors = document.querySelectorAll(".priority-color");

let colors = ["red", "yellow", "green", "grey"];
let modalPriorityColor = colors[colors.length - 1];

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

// listener for modal priority color

allPriorityColors.forEach((color, i) => {
  color.addEventListener("click", (e) => {
    allPriorityColors.forEach((color, i) => {
      color.classList.remove("border");
    });
    color.classList.add("border");

    modalPriorityColor = color.classList[0];
  });
});

modal.addEventListener("keydown", (e) => {
  let key = e.key;

  if (key === "Shift") {
    createTicket(modalPriorityColor, textareaContainer.value);
    modal.style.display = "none";
    addFlag = false;
    textareaContainer.value = "";
  }
});

function createTicket(ticketColor, ticketTask, ticketID) {
  console.log(ticketColor);
  let id = ticketID || shortid();
  let ticketContainer = document.createElement("div");
  ticketContainer.setAttribute("class", "ticket-container");

  ticketContainer.innerHTML = `
  <div class="ticket-color ${ticketColor}"></div>
          <div class="ticket-id">#${id}</div>
          <div class="ticket-area">${ticketTask}</div>`;

  displayTicket.appendChild(ticketContainer);
}
