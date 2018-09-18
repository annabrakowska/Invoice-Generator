let ind = 0;
function addRow() {
  console.log("halo");
  let rows = document.getElementsByClassName("item-row");
  let row = document.getElementsByTagName("tbody")[0].insertRow(-1);
  let cell = row.insertCell(-1);
  ind++;
  console.log("index of row is: " + ind);
  row.innerHTML =
    '<tr class="item-row"><td><input class="form-control item_name" placeholder="Item name" /></td><td><input class="form-control item_desc" placeholder="Item description" /></td><td><input class="form-control cost" value="0.00" /></td><td><input id="qty" onkeyup="calcPrice()" class="form-control qty" value="0" /></td><td class="price_td"><span class="price">0.00</span><span class="subtotal_currency"></span></td><td class="delete_td"><a onclick="deleteRows()" class="delete" href="javascript:;" title="Remove row"><span class="ti-close"></span></a></td></tr>';
}

function deleteRows() {
  document.getElementsByTagName("tbody")[0].deleteRow(-1);
  if (document.getElementsByClassName("item-row").length < 2) {
    document.getElementsByClassName("delete").hide();
  }
}
let tot = 0;
// function sum() {
//   let prices = document.querySelectorAll("price");
//   prices.forEach(function(el) {
//     total += el.value;
//   });
//   console.log("this is total: " + tot);
//   return tot;
// }

function calcPrice() {
  let parent = document.getElementsByClassName("item-row");
  let cost = document.getElementsByClassName("cost")[ind].value;
  let quantity = document.getElementsByClassName("qty")[ind].value;
  let total = cost * quantity;
  document.getElementsByClassName("price")[ind].innerText = total;
  tot += total;
  let tax = tot * 0.13;
  console.log("this is tax: " + tax);

  document.getElementById("subtotal").innerText = tot.toFixed(2);
  document.getElementById("9").value = tax.toFixed(2);
  document.getElementById("invoice_total").innerText = (tot + tax).toFixed(2);
  document.getElementsByClassName("due")[0].innerText = (tot + tax).toFixed(2);
  document.getElementById("invoice_total1").value = (tot + tax).toFixed(2);
}
