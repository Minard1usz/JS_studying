const tableCarcass = document.getElementById("table-carcass");

let counter = 1;

for (let i = 0; i < 10; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("td");
    cell.textContent = counter;
    row.appendChild(cell);
    counter++;
  }

  tableCarcass.appendChild(row);
}