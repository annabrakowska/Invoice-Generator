function printer(id) {
  let element = document.getElementById(id);
  let domClone = element.cloneNode(true);
  let printSection = document.createElement("div");
  printSection.setAttribute("id", "printSection");

  printSection.appendChild(domClone);
  document.body.insertBefore(printSection, document.body.firstChild);
  window.print();

  let oldElement = document.getElementById("printSection");
  if (oldElement != null) {
    oldElement.parentNode.removeChild(oldElement);
  }
  return true;
}
