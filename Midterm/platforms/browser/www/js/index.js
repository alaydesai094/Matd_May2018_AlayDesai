document.getElementById("rideButton").addEventListener("click",checkrideDetails);

function checkrideDetails() {
	
 var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
 var pool = document.getElementById("pool").value;
 var direct = document.getElementById("direct").value;
var distance;
var total;
var base = 2.50;
var dcharge= 0.81;
var service = 1.75;
	
//empty field	
if (from == "" && to =="")
{
alert("Please input a Value");
  console.log("Need some Input");
}
else 
{
alert('Code has accepted');
	   console.log("Good to Go");
   console.log("From : " + from);
    console.log("To : " + to);
	
		if(document.getElementById("pool").checked) {
   					console.log(" Ryde : " + pool);
		}else if( document.getElementById("direct").checked) {
   					console.log("Ryde : " + direct);
		}else {
   					console.log("Ryde : " +  none);
		}
		
}

// distance	
	if(from=="275 Yorkland Blvd" && to =="CN Tower")
	{
		distance = 22.9;
		console.log("Distance : " + distance);
		
	}
	else if(from=="Fairview Mall" && to =="Tim Hortons")
	{
		distance = 1.2;
		console.log("Distance : " + distance);
	}
	else
	{
		alert('Location Not Found');
		console.log("Location Not Found ");
	}
	var dcharge = (dcharge*distance);
	var total = (base + dcharge + service)
	
		console.log("Base Price: " + base);
	console.log("Distance charge : " + dcharge);
	console.log("Service : " + service);
	
	if(total <= 5.50)
	{
		total = 5.50
		console.log("Total : " + total);
		
	}
	else
	{
		console.log("Total : " + total);
	}
	
	if(document.getElementById("pool").checked) {
   					console.log("Total : " + total);
		}else if( document.getElementById("direct").checked) {
   					total = (total + ((total*10)/100));
					console.log("Total : " + total);
		}else {
   					console.log("Ryde : " +  none );
		}
	
console.log("Well Done");
	

}
