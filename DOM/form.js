let form = document.createElement("form");
// form.addEventListener("submit", ) // might add something here

//create a label
let label = document.createElement("label");
label.textContent = "Enter your name: ";

// label event listeners
function labelHover() {
  this.style.color = "orange";
}

label.addEventListener("mouseover", labelHover);
label.addEventListener("mouseout", function () {
  this.style.color = "";
});

let inputField = document.createElement("input");
inputField.type = "text";
inputField.placeholder = "enter your name";
inputField.id = "inputField";

form.appendChild(label);
form.appendChild(inputField);

document.body.appendChild(form);
