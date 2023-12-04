// Expense Tracker

let item = document.querySelector(".items");

let transactions = document.getElementById("transactions");

let amountValue = document.getElementById("amount-value");

let description = document.getElementById("text-value");

let requiredBalance = document.getElementById("balance");

let submit = document.querySelector("#submit");

let balance = 0;

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

  balance += Number(amountValue.value);

  console.log(balance);

  requiredBalance.innerHTML = `₹ ${balance}`;

  amountValue.value = "";
  description.value = "";
});
