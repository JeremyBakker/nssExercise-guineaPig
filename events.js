/* I wrote out most of the document assignments in this exercise to 
solidify the terms in my mind. I did not aim for efficiency. */

var outputEl = document.getElementById("output-target");

/* When any section is clicked the output target text should be 
"You clicked on the {text of the section} section" */
document.documentElement.addEventListener("click", sectionClick);

function sectionClick(MouseEvent){
	var elementText = event.target.innerHTML;
	outputEl.innerHTML = "You clicked on the " + elementText;
}

/* When the mouse is over the h1 tag, the output element should contain the text 
"You moved your mouse over the header". */
document.getElementsByTagName("h1")[0].addEventListener("mouseover", hover);
function hover(event) {
	outputEl.innerHTML = "You moved your mouse over the header.";
}

/* When the mouse leaves the h1 tag, the output element should contain the text
 "You left me!!". */
document.getElementsByTagName("h1")[0].addEventListener("mouseleave", out);
function out(event) {
	outputEl.innerHTML = "You left me!";
}

/* When you type characters into the input field, the output element should 
mirror the text in the input field. */
document.getElementsByTagName("input")[0].addEventListener("keyup", mirror);
function mirror(event) {
	outputEl.innerHTML = document.getElementsByTagName("input")[0].value;
}

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.