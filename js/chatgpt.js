<div id="tableContainer"></div>

<script>
  var table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.width = "100%";
  
  var thead = document.createElement("thead");
  var tr = document.createElement("tr");
  
  var th1 = document.createElement("th");
  th1.innerHTML = "Item Name";
  th1.style.border = "1px solid black";
  th1.style.padding = "5px";
  tr.appendChild(th1);
  
  var th2 = document.createElement("th");
  th2.innerHTML = "Price";
  th2.style.border = "1px solid black";
  th2.style.padding = "5px";
  tr.appendChild(th2);
  
  var th3 = document.createElement("th");
  th3.innerHTML = "Qty";
  th3.style.border = "1px solid black";
  th3.style.padding = "5px";
  tr.appendChild(th3);
  
  var th4 = document.createElement("th");
  th4.innerHTML = "Subtotal";
  th4.style.border = "1px solid black";
  th4.style.padding = "5px";
  tr.appendChild(th4);
  
  thead.appendChild(tr);
  table.appendChild(thead);
  
  var tbody = document.createElement("tbody");
  
  for (var i = 0; i < 3; i++) {
    var tr = document.createElement("tr");
    
    var td1 = document.createElement("td");
    td1.style.border = "1px solid black";
    td1.style.padding = "5px";
    var label1 = document.createElement("label");
    label1.innerHTML = "Item Name: ";
    label1.setAttribute("for", "itemName" + i);
    td1.appendChild(label1);
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "itemName" + i);
    input1.setAttribute("name", "itemName" + i);
    td1.appendChild(input1);
    tr.appendChild(td1);
    
    var td2 = document.createElement("td");
    td2.style.border = "1px solid black";
    td2.style.padding = "5px";
    var label2 = document.createElement("label");
    label2.innerHTML = "Price: ";
    label2.setAttribute("for", "price" + i);
    td2.appendChild(label2);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "price" + i);
    input2.setAttribute("name", "price" + i);
    td2.
