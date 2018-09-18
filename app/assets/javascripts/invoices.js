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

function invoiceReader(main, modal) {
  let info = main.value;
  modal.empty();
  modal.append(info);
}

function inviceReader2(main, modal) {
  let info2 = main.innerText;
  modal.empty();
  modal.append(" " + info);
}

// document.getElementById("invoice_button").addEventListener("click", function() {
//   for (let i = 1; i < 11; i++) {
//     let str = i.toString();
//     let field = document.getElementById("#" + str);
//     let fieldModal = document.getElementById("#modal_" + id);
//     invoiceReader(field, fieldModal);
//   }
//   let subtotal = document.getElementById("subtotal");
//   let modalSubtotal = document.getElementById("modal_subtotal");
//   inviceReader2(subtotal, modalSubtotal);

//   let invoiceNum = document.getElementById("invoice_number");
//   let modalInvNum = document.getElementById("modal_invoice_number");
//   inviceReader2(invoiceNum, modalInvNum);

//   let rows = document.getElementsByClassName("item-row");
//   document.getElementById("modal_tbody").empty();

//   for (i = 0; i < rows.length; i++) {
//     let row = rows[i];
//     let items = document.getElementsByClassName("item_name");
//     let name = items[i].value;
//     document
//       .getElementById("modal_tbody")
//       .append('<tr class="modal-item-row"></tr');
//     document
//       .getElementsByClassName("modal-item-row:last")
//       .append("<td>" + name + "</td>");
//   }
// });
