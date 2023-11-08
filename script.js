// JavaScript Document

/* Declare variables below to save the different sections (divs) of your story*/

let storyOpening = document.querySelector(".story-opening");	
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let message = document.querySelector(".message");
let continueButton = document.querySelector(".continue-button");
let continueOneEnd = document.querySelector("#continue-one-end");
let continueTwoEnd = document.querySelector("#continue-two-end");

optionOne.onclick=function(){
	storyOpening.style.display="none";
	optionOneScreen.style.display="block";
	optionOne.style.display="none";
	optionTwo.style.display="none";
	continueButton.style.display="block";
}

optionTwo.onclick=function(){
	storyOpening.style.display="none";
	optionOneScreen.style.display="none";
	optionTwoScreen.style.display="block";
	optionTwo.style.display="none";
	optionOne.style.display="none";
	continueButton.style.display="block";
	
}
/*
continueButton.onclick=function(){
	optionOneScreen.style.display="none";
	optionTwoScreen.style.display="none";
	optionOne.style.display="none";
	optionTwo.style.display="none";
	continueButton.style.display="none";
}
*/
continueOneEnd.onclick=function(){
	optionOneEnd.style.display="block";
	optionOneScreen.style.display="none";
	optionTwoScreen.style.display="none";
	optionOne.style.display="none";
	optionTwo.style.display="none";
	continueButton.style.display="none";
}

continueTwoEnd.onclick=function(){
	optionTwoEnd.style.display="block";
	optionOneScreen.style.display="none";
	optionTwoScreen.style.display="none";
	optionOne.style.display="none";
	optionTwo.style.display="none";
	continueButton.style.display="none";
}




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


