/* I wrote out most of the DOM assignments in this exercise to solidify the terms in my mind. I did not aim for efficiency. */

/***** The comments below that begin and end with a slash and five asterisks outline the project parameters *****/
// What follows those comments explains the code.


/***** When any section is clicked the output target text should be "You clicked on the {text of the section} 
	section" *****/
// The first line here targets the output element.
// The loop puts an event listener on all the section elements. Adding an event listener to elements identified by class 
  // requires a loop because each element is catalogued by an index value.
// The function grabs the text of the section clicked and displays it in the output element. 
var outputEl = document.getElementById("output-target");
for (var i = 0; i < document.getElementsByClassName("article-section").length; i++) {
  document.getElementsByClassName("article-section").item(i).addEventListener("click", sectionClick);
}
function sectionClick(MouseEvent){
	var elementText = event.target.innerHTML;
	outputEl.innerHTML = "You clicked on the " + elementText;
}

/***** When the mouse is over the <h1> tag, the output element should contain the text "You moved your mouse over the 
	header". *****/
// The first line here adds an event listener to the <h1> element.
// The function takes the string on the right side of the equation on line 24 and displays it in the output element.
document.getElementsByTagName("h1")[0].addEventListener("mouseover", hover);
function hover(event) {
	outputEl.innerHTML = "You moved your mouse over the header.";
}

/***** When the mouse leaves the h1 tag, the output element should contain the text "You left me!!". *****/
// The first line here adds an event listener to the <h1> element for a mouseleave event.
// The function takes the string on the right side of the equation on line 32 and displays it in the output element.
document.getElementsByTagName("h1")[0].addEventListener("mouseleave", out);
function out(event) {
	outputEl.innerHTML = "You left me!";
}

/***** When you type characters into the input field, the output element should mirror the text in the input field. *****/
// The first line here adds an event listener to the <input> element to capture the user input. I chose "keyup" rather 
  // than "keydown" or "keypress" because the latter two fail to register keystrokes until the user presses a second key. 
  // I wanted to allow for a single character to display.
// The function displays the user input in the output section. 
document.getElementsByTagName("input")[0].addEventListener("keyup", mirror);
function mirror(event) {
	outputEl.innerHTML = document.getElementsByTagName("input")[0].value;
}

/***** When you click the "Add color" button, the guinea-pig element's text color should change to blue. *****/
// Each of the next four sections works on the same logic: 1) add an event listener that fires a function on the 
	// click of a button; 2) toggle the class list for the guinea-pig element to add or take away the particular 
	// class identified in the function.
document.getElementById("add-color").addEventListener("click", blue);
function blue(event) {
	document.getElementById("guinea-pig").classList.toggle("blue");
	}
/***** When you click the "Hulkify" button, the guinea-pig element's font size should become much larger. *****/
document.getElementById("make-large").addEventListener("click", hulk);
function hulk(event) {
	document.getElementById("guinea-pig").classList.toggle("hulk");
	}
/***** When you click the "Capture it" button, the guinea-pig element should have a border added to it. *****/
document.getElementById("add-border").addEventListener("click", capture);
function capture(event) {
	document.getElementById("guinea-pig").classList.toggle("border");
	}

/***** When you click the "Rounded" button, the guinea-pig element's border should become rounded. *****/
document.getElementById("add-rounding").addEventListener("click", round)
function round(event) {
	document.getElementById("guinea-pig").classList.toggle("round");
}