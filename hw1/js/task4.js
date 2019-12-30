function getMultiplyTable() {
  const body = document.body;
  const table = document.createElement('table');
  let tr, td, tdInner = '';

  table.style.width = '100%';
  table.setAttribute('border', '1');

  for (let i = 1; i <= 10; i++) {
    tdInner = '';
    if (i === 1 || i === 6) {
      tr = document.createElement('tr');
    }
    td = document.createElement('td');
    for (let j = 1; j <= 10; j++) {
      tdInner += `<div style="padding: 5px">${i} * ${j} = ${i * j}</div>`;
    }
    td.innerHTML = tdInner;
    tr.append(td);
    if (i === 5 || i === 10) {
      table.append(tr);
    }
  }

  body.append(table);
}

getMultiplyTable();