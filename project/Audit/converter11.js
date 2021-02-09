$(document).ready(function () {
	
var table = document.getElementById("myTable");
var row = table.insertRow(1);
array = JSON.parse(localStorage.getItem('Items')) || [];
i=1;

while(array[0][i]!=undefined) {
console.log(array[0][i]);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = array[0][i];
cell2.innerHTML = array[0][i+1];
cell3.innerHTML = array[0][i+2];
i=i+3;
var row = table.insertRow(1);	
}
});
