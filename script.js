let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  const title = document.getElementById("title").value;
  const amount = Number(document.getElementById("amount").value);

  if (!title || !amount) return;

  expenses.push({ id: Date.now(), title, amount });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";

  render();
}

function deleteExpense(id) {
  expenses = expenses.filter(e => e.id !== id);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  render();
}

function render() {
  const list = document.getElementById("list");
  const total = document.getElementById("total");

  list.innerHTML = "";
  let sum = 0;

  expenses.forEach(e => {
    sum += e.amount;
    list.innerHTML += `
      <li>
        ${e.title} - ৳${e.amount}
        <button onclick="deleteExpense(${e.id})">X</button>
      </li>
    `;
  });

  total.innerText = sum;
}

render();
