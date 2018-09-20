let ind = 0;
let tot = 0;
let tax = 0;
let initial = 0;
function addRow() {
  console.log("halo");
  let rows = document.getElementsByClassName("item-row");
  let modalBody = document.getElementById("modalBody");
  let modalRow =
    '<tr class="item-rowModal"><td><span>Item name</span></td><td><span>Description</span></td><td><span>Unit cost</span></td><td><span>Quantity</span></td><td class="price_td"><span class="price">0.00</span><span class="subtotal_currency"></span></td></tr>';
  let row = document.getElementsByTagName("tbody")[0].insertRow(-1);
  let cell = row.insertCell(-1);
  ind++;

  modalBody.innerHTML += modalRow;

  row.innerHTML =
    '<tr class="item-row"><td><input class="input item_name" placeholder="Item name" /></td><td><input class="input item_desc" placeholder="Item description" /></td><td><input class="input cost" value="0.00" /></td><td><input id="qty" onkeyup="calcPrice()" class="input qty" value="0" /></td><td class="price_td"><span class="price forCalc">0.00</span><span class="subtotal_currency"></span></td><td class="delete_td"><a onclick="deleteRows()" class="delete" href="javascript:;" title="Remove row"><span class="ti-close"></span></a></td></tr>';
}

function deleteRows() {
  ind--;
  let total = document.getElementsByClassName("price")[ind].innerText;
  tot -= Number(total);
  tax -= Number(total) * 0.13;
  document.getElementsByTagName("tbody")[0].deleteRow(-1);
  document.getElementById("modalBody").deleteRow(-1);
  updater();
}

function calcPrice() {
  let currency = document.getElementById("invoice_currency").value;
  let parent = document.getElementsByClassName("item-row");
  let cost = document.getElementsByClassName("cost")[ind].value;
  let quantity = document.getElementsByClassName("qty")[ind].value;
  let total = cost * quantity;

  document.getElementsByClassName("price")[ind].innerText = total;

  tot = 0;

  Array.from(document.querySelectorAll(".forCalc")).forEach(function(el) {
    tot += Number(el.innerText);
    console.log("this is total:" + tot);
  });

  tax = tot * 0.13;

  Array.from(document.querySelectorAll(".subtotal_currency")).forEach(function(
    el
  ) {
    el.innerText = " " + currency;
  });
  updater();
}

function updater() {
  document.getElementById("subtotal").innerText = tot.toFixed(2);
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("invoice_total").innerText = (tot + tax).toFixed(2);
  document.getElementsByClassName("due")[0].innerText = (tot + tax).toFixed(2);
  document.getElementById("due").innerText = (tot + tax).toFixed(2);
  document.getElementById("invoice_total1").value = (tot + tax).toFixed(2);
}
