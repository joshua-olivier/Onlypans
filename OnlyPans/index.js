//Code that displays a text inside the alert box
window.alert("Welcome to OnlyPans, it's a remake of the original website OnlyFans, but we sell cooking pans online for our content creators and normal people who loves cooking, but before we proceed, I have some questions to ask you! :)");

//Code that displays first question in the alert box 
let personName = prompt("May I please know your name?");
console.log(personName);

//Code that displays a text in the alert box after answering the first question
window.alert("Ok, next question!");

//Code that displays the second question in the alert box 
let personAge = prompt("May I please know your age? You don't have to answer if you don't want to!");
console.log(personAge);

//Code that displays a text in the alert box after answering the second question
window.alert("Ok, next question!");

//Code that displays the third question in the alert box 
let questionPan = prompt("Are you looking for a pan, if yes, what kind of pan? if no, press cancel! ");
console.log(questionPan)

//Code that displays a text in the alert box after answering the third question
window.alert("Ok, last question, for content creators only!");

//Code for the bonus question that displays in the alert box
let questionPan2 = prompt("Content creator, are you looking for a custom pan? if yes, what kind? we'll make one for you, if no, press cancel!");
console.log(questionPan2)

//Code that displays a bonus question in the alert box
window.alert("Thank you for your answers! :)");


//Function in JavaScript made for the loader animation
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}