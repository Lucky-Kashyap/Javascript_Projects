// Expense Tracker

let item = document.querySelector(".items");

let transactions = document.getElementById("transactions");

let amountValue = document.getElementById("amount-value");

let description = document.getElementById("text-value");

let submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  // e.preventDefault();

  // console.log("SUBMIT");

  // console.log(description.value);
  // console.log(amountValue.value);
  // amountValue.innerText = amountValue.value;
  // description.innerText = description.value;

  transactions.innerHTML += `
  <li class="items">
          <span class="left">${description.value}</span>
          <span class="right">${amountValue.value}</span>
          <span class="delete fa-solid fa-xmark"></span>
        </li>`;

  amountValue.value = "";
  description.value = "";
});
