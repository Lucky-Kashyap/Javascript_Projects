// Expense Tracker

let items;

let transactions = document.getElementById("transactions");

let amountValue = document.getElementById("amount-value");

let description = document.getElementById("text-value");

let requiredBalance = document.getElementById("balance");

let submit = document.querySelector("#submit");

let transactionsArray = [];

let balance = 0;
let deleteExp;

// localStorage.getItem("expenses", transactionsArray);

submit.addEventListener("click", (e) => {
  // e.preventDefault();

  // console.log("SUBMIT");

  // console.log(description.value);
  // console.log(amountValue.value);
  // amountValue.innerText = amountValue.value;
  // description.innerText = description.value;

  transactionsArray.push({ name: description.value, price: amountValue.value });

  transactions.innerHTML = transactionsArray.map((ele) => {
    return `<li class="items">
          <span class="left">${ele.name}</span>
          <span class="right">${ele.price}</span>
          <span class="delete fa-solid fa-xmark"></span>
        </li>`;
  });

  // transactions.innerHTML += `
  // <li class="items">
  //         <span class="left">${description.value}</span>
  //         <span class="right">${amountValue.value}</span>
  //         <span class="delete fa-solid fa-xmark"></span>
  //       </li>`;

  localStorage.setItem("expenses", JSON.stringify(transactionsArray));

  localStorage.getItem("expenses", transactionsArray);

  console.log(transactionsArray);

  // deleteExpenses(document.querySelector());
  // deleteExp = document.querySelector(".delete");

  // deleteExp.addEventListener("click", (e) => {
  // transactions.innerHTML = "";

  // items = document.querySelector(".items");

  // transactions.removeChild(items);
  // });

  balance += Number(amountValue.value);

  // console.log(deleteExp);

  // console.log(balance);/

  // deleteExp = document.querySelector(".delete");

  // deleteExp.addEventListener("click", (e) => {
  // transactions.innerHTML = "";

  //   items = document.querySelector(".items");

  //   transactions.removeChild(items);
  // });

  requiredBalance.innerHTML = `₹ ${balance}`;

  amountValue.value = "";
  description.value = "";
});

// function deleteExpenses() {
// deleteExp = document.querySelector(".delete");

// deleteExp.addEventListener("click", (e) => {
//   // transactions.innerHTML = "";

//   items = document.querySelector(".items");

//   transactions.removeChild(items);
// });
// }
