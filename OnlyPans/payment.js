//Function in JavaScript made for the loader animation
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


//code 
const number = prompt("What is your current amount? Include your amount in numbers only.");

//The if statement tells the user what happens if he/she puts an amount that is greater than $20
if (number > 20) {
  console.log("Your payment has been granted by an automated bot");
}
//The else statement tells the user what happens if he/she puts an amount that is less than $20
else {
  console.log("Sorry, but your payment has been denied by an automated bot. Please try again by refreshing the webpage!");
}


