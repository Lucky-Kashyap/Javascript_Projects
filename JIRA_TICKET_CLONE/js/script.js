// generate tickt

// select modal

let modal = document.querySelector(".wrapper-modal");
let generateTicket = document.querySelector(
  ".container .btn-container .add-btn"
);

let removeTicket = document.querySelector(
  ".container .btn-container .remove-btn"
);
let textareaContainer = document.querySelector(".textarea-container");

let displayTicket = document.querySelector(".display-ticket");

let addFlag = false;
let removeFlag = false;

let lockClass = "ri-lock-line";

let unlockClass = "ri-lock-unlock-fill";

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

removeTicket.addEventListener("click", (e) => {
  removeFlag = !removeFlag;
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
  // console.log(ticketColor);
  let id = ticketID || shortid();
  let ticketContainer = document.createElement("div");
  ticketContainer.setAttribute("class", "ticket-container");

  ticketContainer.innerHTML = `
  <div class="ticket-color ${ticketColor}"></div>
          <div class="ticket-id">#${id}</div>
          <div class="ticket-area">${ticketTask}</div>
          
          <div class='ticket-lock'><i class=${lockClass}></i></div>
          `;

  displayTicket.appendChild(ticketContainer);

  handleRemoveTicket(ticketContainer);

  handleLock(ticketContainer);
  handleColor(ticketContainer);
}

function handleRemoveTicket(ticket) {
  // remove flag -> true -> remove

  if (removeFlag) {
    ticket.remove();
  }
}

// handle lock

function handleLock(ticket) {
  console.log(ticket);
  let lockElement = ticket.querySelector(".ticket-lock");

  let lock = lockElement.children[0];

  let ticketArea = ticket.querySelector(".ticket-area");

  lock.addEventListener("click", (e) => {
    if (lock.classList.contains(lockClass)) {
      lock.classList.remove(lockClass);
      lock.classList.add(unlockClass);
      ticketArea.setAttribute("contenteditable", "true");
    } else {
      lock.classList.remove(unlockClass);
      lock.classList.add(lockClass);
      ticketArea.setAttribute("contenteditable", "false");
    }
  });
}

// handle color

function handleColor(ticket) {
  let ticketColor = ticket.querySelector(".ticket-color");

  ticketColor.addEventListener("click", () => {
    let currTicketColor = ticketColor.classList[1];

    // get ticket color  index

    let currTicketColorIndex = colors.findIndex((color) => {
      return currTicketColor === color;
    });

    currTicketColorIndex++;

    let newTicketColorIndex = currTicketColorIndex % colors.length;
    let newTicketColor = colors[newTicketColorIndex];

    ticketColor.classList.remove(currTicketColor);

    ticketColor.classList.add(newTicketColor);
  });
}
