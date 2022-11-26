var  menu=[

    {
        Foodtype:"dessert",
        Payment:18,
        orderimage: "dessert.jpg",
        },
        {
            Foodtype:"mainCo",
            Payment:20,
            orderimage: "mainCo.jpg",
            },
        {
            Foodtype:"apptozer",
            Payment:7,
            orderimage: "apptizer.jpg",
            },
]

function  FillOP()
{
	var x = document.getElementById("mnu");
    for (var i = 0; i < menu.length; i++) {
	x.options[x.options.length] = new Option(menu[i].Foodtype , menu[i].Payment);
    }
}

let  T =document.querySelector('table');
let  Oimg=document.querySelector('table');
let  C=document.querySelector('#customer');
let  F=document.querySelector('#mnu');

function ask() 
{
	let i=F.selectedIndex;
	let t1=menu[i].Foodtype;
	//<img src="pic_trulli.jpg" >
	let t2= '<img src=' +  menu[i].orderimage + ">" ;
	let t3=menu[i].Payment;

	var table = document.getElementById("t");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(table.length);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// Add some text to the new cells:
cell1.innerHTML = t2 ;
cell2.innerHTML = C.value;
cell3.innerHTML = t1;
cell4.innerHTML = t3;
}


function DTbl()
{
	var t = document.getElementById("t");
	var  L =t.rows.length;
	if(L!=1)
	{
		 document.getElementById("t").deleteRow(L-1);
	}
}